import {Request, Response} from 'express'
import * as RumahSakitModel from '../models/RumahSakit'
import {RumahSakit} from '../interface/RumahSakit'

export async function add(req: Request, res: Response){
    const newRs: RumahSakit = req.body
    
    RumahSakitModel.add(newRs, (err: Error, result: any[]) => {
        if(err) return res.status(500).json({success: false})

        res.status(200).json({result})
    })
}

export async function countRs(req: Request, res: Response){
    const newRs: RumahSakit = req.body
    
    RumahSakitModel.countRs((err: Error, result: any[]) => {
        if(err) return res.status(500).json({success: false})

        res.status(200).json({result})
    })
}