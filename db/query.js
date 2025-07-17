const { executeQuery } = require('./postgres');
const fs = require('fs');

const userdetail = async (req, res) => {
    const users_id = req?.params?.id;
    const query = await executeQuery("SELECT * FROM users where id = $1", [users_id]);
    if (query.length > 0) {
        res.status(200).json({ "data": query });
    } else {
        res.status(200).json({ "succuss": "failed" })
    }
}

const userlist = async (req, res) => {
    const nameregex = new RegExp("^[a-zA-Z]+$");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const char = req.body.name.toLowerCase();
    const names = (nameregex.test(char));
    const emails = emailRegex.test(req.body.email)

    if (names == false) {
        res.status(200).json({ "success": false, "message": "nama hanya alpabet" });
    }
    else {
        if (emails == false) {
            res.status(200).json({ "success": false, "message": "Cek Email Anda" });
        } else {
            const sql = await executeQuery("insert into users(name,birth_date,age_years,age_months,address,email)values($1,$2,$3,$4,$5,$6)",
                [names, req.body.birth_date, req.body.age_years, req.body.age_months, req.body.address, emails]);
            if (sql) {
                res.status(200).json({ "success": true, "message": "Data Suda Masuk Ke Database!" });
            } else {
                res.status(200).json({ "success": false, "message": "Data Tidak Bisa Masuk Ke Database!" });
            }
        }
    }
}

module.exports = {
    userlist,
    userdetail,
}