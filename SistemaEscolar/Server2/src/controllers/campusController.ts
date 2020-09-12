import {Request, Response } from 'express';

import db from '../database';

class CampusController{
    public async campus(req: Request, res: Response): Promise<void> {
        const campus = await db.query('select * from sede');
        console.log(campus);
        res.json(campus);
    } 
    public async campusById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const campus = await db.query('select * from sede WHERE COD_SEDE=?', [id]);
        console.log(campus);
        res.json(campus);
    } 

    public async create(req: Request, res: Response): Promise<void> {
        const result = await db.query('INSERT INTO sede set ?', [req.body]);
        res.json({ message: 'Campus Saved' });
    }
    
    

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await db.query('UPDATE sede set ? WHERE COD_SEDE = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM sede WHERE id = ?', [id]);
        res.json({ message: "The campus was deleted" });
    }

}

export const campusController = new CampusController();