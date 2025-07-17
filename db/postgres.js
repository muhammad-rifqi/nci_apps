const util = require('util');
const pgsql = require('pg');
const pool = new pgsql.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'registrasi_app',
    password: 'Barlok15@',
    port: 5432,
})

// live : Barlok15@ 
pool.query = util.promisify(pool.query);
const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParms, (err, data) => {
                if (err) {
                    console.log("error in executing the query");
                    reject(err);
                }
                resolve(data?.rows);
            });
        } catch (err) {
            reject(err);
        }
    });
};
module.exports = { executeQuery };
