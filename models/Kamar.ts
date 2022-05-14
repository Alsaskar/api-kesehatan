import {db} from '../config/database'
import {Kamar} from '../interface/Kamar'

export const add = (kamar: Kamar, callback: Function) => {
    const query = "INSERT INTO kamar(id_rs, nama, nomor, golongan, total_kasur, total) VALUES(?, ?, ?, ?, ?, ?)"
    db.query(query, [kamar.id_rs, kamar.nama, kamar.nomor, kamar.golongan, kamar.total_kasur, kamar.total], (err, result) => {
        if(err) throw err;

        callback(null, {result})
    })
}

// tampilkan semua data
export const get_all = (callback: Function) => {
    const query = "SELECT * FROM kamar ORDER BY id DESC"
    db.query(query, (err, result) => {
        if(err) throw err;

        callback(null, result)
    })
}

// tampilkan data kamar berdasarkan rumah sakit
export const get_by = (idRs: string, callback: Function) => {
    const query = "SELECT * FROM kamar WHERE id_rs = ? ORDER BY id DESC"
    db.query(query, [idRs], (err, result) => {
        if(err) throw err;

        callback(null, result)
    })
}

export const remove = (idKamar: string, callback: Function) => {
    const query = "DELETE FROM kamar WHERE id = ?"
    db.query(query, [idKamar], (err, result) => {
        if(err) throw err;

        callback(null, {message: "Data berhasil dihapus", success: true})
    })
}