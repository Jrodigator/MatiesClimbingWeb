const pool = require('./db');

// get a pop

// get all pop

// insert a pop
const createPOP = (filepath, filename, currentDate) => {
    console.log();
    return new Promise(function (resolve, reject) {
        pool.connect ((err, client, done) => {
            if (err) {
                console.error("Error acquiring pg client in popModel", err.stack);
                reject(err);
                return;
            }
            const date = Date.now();
            client.query(
                "INSERT INTO public.payment \
                (filepath, filename, upload_date) \
                VALUES ($1, $2, $3) RETURNING *;",
                [filepath, filename, currentDate],
                (error, results) => {
                    done(); // release the client back to pool
                    if (error) {
                        console.error("error executing save pop query", error.stack);
                        reject(error);
                        return;
                    }
                    if (results && results.rows && results.rows.length > 0) {
                        resolve(results.rows[0].pop_id); // Resolve with the ID of the inserted record
                    } else {
                        reject(new Error("No results found"));
                    }
                }
            )
        })
    });
}

module.exports = {
    createPOP,
};
