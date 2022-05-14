import {db} from '../config/database'
import {RumahSakit} from '../interface/RumahSakit'
import { RowDataPacket } from 'mysql2'
const bcrypt = require('bcrypt')

export const add = (rs: RumahSakit, callback: Function) => {
    // create hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(rs.password, salt)

    const user = "INSERT INTO user(firstname, lastname, username, password, role) VALUES(?, ?, ?, ?, 'rumah_sakit')"
    db.query(user, [rs.firstname, rs.lastname, rs.username, hash], (err, result) => {
        if (err) throw err;

        const query = "INSERT INTO rumah_sakit(id_user, nama, alamat, jumlah_dokter, jumlah_perawat) VALUES(?, ?, ?, ?, ?)"
        db.query(query, [(<RowDataPacket> result).insertId, rs.nama, rs.alamat, rs.jumlah_dokter, rs.jumlah_perawat]);

        callback(null, {message: 'Berhasil menambahkan data'})
    })

}

export const countRs = (callback: Function) => {
    const query = "SELECT id FROM rumah_sakit"
    db.query(query, (err, result) => {
        if (err) throw err;

        const total = (<RowDataPacket> result).length;
        callback(null, {total: total})
    })
}