import {Request, Response} from 'express'
import * as PasienModel from '../models/Pasien'
import {Pasien} from '../interface/Pasien'

export async function add(req: Request, res: Response){
    const newPasien: Pasien = req.body

    PasienModel.add(newPasien, (err: Error, result: any[]) => {
        if(err) return res.status(500).json({success: false})

        res.status(200).json({result})
    })
}

export async function get_all(req: Request, res: Response){
    PasienModel.get_all((err: Error, result: any[]) => {
        if(err) return res.status(500).json({success: false})

        res.status(200).json({result})
    })
}