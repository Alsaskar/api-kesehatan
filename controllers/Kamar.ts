import {Request, Response} from 'express'
import * as KamarModel from '../models/Kamar'
import {Kamar} from '../interface/Kamar'

export async function add(req: Request, res: Response){
    const newKamar: Kamar = req.body
    
    KamarModel.add(newKamar, (err: Error, result: any[]) => {
        if(err) return res.status(500).json({success: false})

        res.status(200).json({result})
    })
}

export async function get_all(req: Request, res: Response){
    KamarModel.get_all((err: Error, result: any[]) => {
        if(err) throw err;

        res.status(200).json({result})
    })
}

// ambil data kamar berdasarkan rumah sakit
export async function get_by(req: Request, res: Response){
    const idRs = req.params.idRs
    KamarModel.get_by(idRs, (err: Error, result: any[]) => {
        if(err) throw err;

        res.status(200).json({result})
    })
}

export async function remove(req: Request, res: Response){
    const idKamar = req.params.idKamar
    KamarModel.remove(idKamar, (err: Error, result: any[]) => {
        if(err) throw err;

        res.status(200).json({result})
    })
}