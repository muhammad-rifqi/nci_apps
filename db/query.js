const { executeQuery } = require('./postgres');
const fs = require('fs');

const userdetail = async (req, res) => {
    const users_id = req?.params?.id;
    const query = await executeQuery("SELECT * FROM users where id = $1", [users_id]);
    if (query.length > 0) {
        res.status(200).json({ "success": true, "data": query });
    } else {
        res.status(200).json({ "succuss": "failed", "data": null })
    }
}

const userlist = async (req, res) => {
    const nameregex = new RegExp("^[a-zA-Z\\s]+$");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const char = req.body.name;
    const names = (nameregex.test(char));
    const charemail = req.body.email.trim().toLowerCase();
    const emails = emailRegex.test(req.body.email)

    if (names == false) {
        res.status(403).json({ "success": false, "message": "nama hanya alpabet" });
    }
    else {
        if (emails == false) {
            res.status(403).json({ "success": false, "message": "Cek Email Anda" });
        } else {
            const sql = await executeQuery("insert into users(name,birth_date,age_years,age_months,address,email)values($1,$2,$3,$4,$5,$6) RETURNING id",
                [char, req.body.birth_date, req.body.age_years, req.body.age_months, req.body.address, charemail]);
            if (sql) {
                res.status(200).json({ "success": true, "last_id": sql[0]?.id, "message": "Data Suda Masuk Ke Database!" });
            } else {
                res.status(403).json({ "success": false, "message": "Data Tidak Bisa Masuk Ke Database!" });
            }
        }
    }
}

const userall = async (req, res) => {
    const sql = await executeQuery("SELECT * FROM users");
    if (query.length > 0) {
        res.status(200).json({ "success": true, "data": sql });
    } else {
        res.status(200).json({ "succuss": "failed", "data": null })
    }
}

module.exports = {
    userlist,
    userdetail,
    userall,
}