const pool = require('./db');
const popModel = require('./popModel');

// from the membership_type table
const membershipTypeEnum = {
    STUDENT: 1,
    EXTERNAL: 2
};

// get all the users from our database
const getAllMembers = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("select * from member;", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("internal server error");
    }
};

// get a data for a single member
const getMember = async (id) => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query(
                "select * from member where member_id = $1;",
                [id],
                (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("internal server error");
    }
};

// create a new member record
const createMember = (body, filepath, filename, currentDate) => {
    return new Promise(function (resolve, reject) {
        const {name, surname, username, password, email,
                phone_number, student_number, id_number,
                foreign_student, gender, membership_type,
                start_date, end_date} = body;
        // Check if the key exists
        let membershipTypeValue;
        if (membership_type in membershipTypeEnum) {
            // Key exists, access the value
            membershipTypeValue = membershipTypeEnum[membership_type];
        } else {
            console.log(`Key "${x}" does not exist in the enum.`);
            reject(new Error(`membership_type value (${membership_type}) does not exists`));
        }

        // create the pop model and save the metadata into that
        popModel.createPOP(filepath, filename, currentDate)
        .then(paymentID => {
            // TODO : might have to change the type of some of these fields before inserting
            // insert the values into the member table
            pool.connect((err, client, done) => {
                if (err) {
                    console.error('Error acquiring client', err.stack);
                    reject(err);
                    return;
                }
                client.query(
                    "INSERT INTO member \
                    (name, surname, username, password, email, \
                    phone_number, student_number, id_number, \
                    foreign_student, gender, membership_type, \
                    start_date, end_date, latest_payment) \
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;",
                    [
                        name, surname, username, password, email,
                        phone_number, student_number, id_number,
                        foreign_student, gender, membershipTypeValue,
                        start_date, end_date, paymentID
                    ],
                    (error, results) => {
                        done(); // Release the client back to the pool
                        if (error) {
                            console.error('Error executing query', error.stack);
                            reject(error);
                            return;
                        }
                        if (results && results.rows && results.rows.length > 0) {
                            resolve(`A new member has been added: ${JSON.stringify(results.rows[0])}`);
                        } else {
                            reject(new Error("No results found"));
                        }
                    }
                );
            });
        });
    });
};

// delete a member
const deleteMember = (id) => {
    return new Promise(function (resolve, reject) {
        pool.query(
            "delete from member where member_id = $1",
            [id], 
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`Member deleted with ID: ${id}`);
            }
        );
    });
};

// update a member record
const updateMember = (id, body) => {
    return new Promise(function (resolve, reject) {
        const { name, surname, username, email, phone_number }  = body;
        pool.query(
            'update member set name = $1, email = $2, phone_number = $3 where member_id = $4 returning *;',
            [name, email, phone_number, id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(`Member updated: ${JSON.stringify(results.rows[0])}`);
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

module.exports = {
    getAllMembers,
    getMember,
    createMember,
    deleteMember,
    updateMember,
    membershipTypeEnum,
};
