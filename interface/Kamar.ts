export interface Kamar{
    id?: number,
    id_rs: number,
    nama: string,
    nomor: string,
    golongan: string,
    total_kasur: number,
    total: number,
    pesan_kamar: {
        id?: number,
        id_kamar: number,
        id_pasien: number,
        no_kasur: string
    }
}