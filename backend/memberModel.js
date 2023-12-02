const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mcc',
    password: 'postgres',
    port: 5432
});
// TODO should not include passwords and stuff in here.
// Install pacakge dotenv, and use environment variables to refernce these values from a .env file (and add the .env file to gitigore)

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
    return new Promise(function (resolve, reject) {
        const {name, surname, username, password, email, phone_number, student_number, id_number, foreign_student, gender} = body;
        pool.query(
            "insert into members value ($1, $2) returning *;",
            [name, email],
            (error, results) => {
                if (error) {
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
