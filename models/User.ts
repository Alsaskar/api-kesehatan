import {db} from '../config/database'
import {User} from '../interface/User'
import { OkPacket, RowDataPacket } from 'mysql2'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export const regisUser = (user: User, callback: Function) => {
    // create hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt)

    const query2 = 'SELECT username FROM user WHERE username = ?'

    db.query(query2, user.username, (error, results) => {
        if(error) throw error;

        const cekUser = (<RowDataPacket> results).length;

        if(cekUser > 0){ // jika username telah digunakan
            callback(null, {msg: 'Username telah digunakan', success: false})
        }else{ // jika username belum digunakan
            const query = 'INSERT INTO user(firstname, lastname, username, password, role) VALUES(?, ?, ?, ?, ?)'
            db.query(query, [user.firstname, user.lastname, user.username, hash, user.role], (err, result) => {
                if(err) throw err;

                // daftarkan token
                const payload = { username: user.username, role: user.role, loggedIn: true }
                const token = jwt.sign(payload, "Token008007***", {expiresIn: '1day'});

                callback(null, {success: true, token: token})
            })
        }
    })
}

export const loginUser = (user: User, callback: Function) => {
    const query = 'SELECT username, password, role FROM user WHERE username = ?'

    db.query(query, user.username, (err, result) => {
        if(err) throw err;

        const cekUser = (<RowDataPacket> result).length;
        const row = (<RowDataPacket> result)[0];
        
        if(cekUser > 0){ // jika username benar
            bcrypt.compare(user.password, row.password, (error: Error, response: Response) => {
                if(error) throw error;

                if(response){ // berhasil login

                    // daftarkan token
                    const payload = { username: row.username }
                    const token = jwt.sign(payload, "Token008007***", {expiresIn: '1day'});

                    const users = {
                        username: row.username,
                        token: token,
                        success: true,
                        role: row.role
                    }

                    callback(null, users)
                }else{ // password salah
                    callback(null, {msg: 'Password salah', success: false})
                }
            })
        }else{ // jika email salah
            callback(null, {msg: 'Username salah', success: false})
        }
    })
}

// ambil data user yang sedang login
export const getDataLoggedIn = (username: string, callback: Function) => {
    const query = 'SELECT * FROM user WHERE username = ?'

    db.query(query, username, (err, result) => {
        if(err) throw err;

        const row = (<RowDataPacket> result)[0];
        const user = {
            id: row.id,
            firstname: row.firstname,
            lastname: row.lastname,
            username: row.username,
            role: row.role,
            loggedIn: true
        }

        callback(null, user)
    })
}