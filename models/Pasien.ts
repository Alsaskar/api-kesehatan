import {db} from '../config/database'
import {Pasien} from '../interface/Pasien'
import { OkPacket, RowDataPacket } from 'mysql2'

export const add = (pasien: Pasien, callback: Function) => {
    const query = "INSERT INTO pasien(tgl_daftar, nama, tempat_lahir, tgl_lahir, provinsi, kota, alamat, jenis_kelamin, gol_darah, agama, pekerjaan, keterangan) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    db.query(query, [pasien.tgl_daftar, pasien.nama, pasien.tempat_lahir, pasien.tgl_lahir, pasien.provinsi, pasien.kota, pasien.alamat, pasien.jenis_kelamin, pasien.gol_darah, pasien.agama, pasien.pekerjaan, pasien.keterangan], (err, result) => {
        if(err) throw err;

        callback(null, {success: true, message: 'Berhasil menambahkan data'})
    })
}

export const get_all = (callback: Function) => {
    const query = "SELECT * FROM pasien ORDER BY id DESC"
    db.query(query, (err, result) => {
        if(err) throw err;

        callback(null, result)
    })
}