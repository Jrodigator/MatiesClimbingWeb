const pool = require('./db');

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
const createMember = (body) => {
        console.log(body);
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
        // TODO : might have to change the type of some of these fields before inserting
        // insert the values into the member table
        pool.query(
            "insert into member \
             (name, surname, username, password, email, \
             phone_number, student_number, id_number, \
             foreign_student, gender, membership_type, \
             start_date, end_date) \
             values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) returning *;",
            [name, surname, username, password, email,
             phone_number, student_number, id_number,
             foreign_student, gender, membershipTypeValue,
             start_date, end_date],
            (error, results) => {
                if (error) {
                    console.log(error)
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(
                        `A new member has been added: ${JSON.stringify(results.rows[0])}`
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

// delete a member
const deleteMember = (id => {
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
});

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
};
