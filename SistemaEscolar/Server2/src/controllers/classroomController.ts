import {Request, Response } from 'express';

import db from '../database';

class ClassroomController{
    public async classroom(req: Request, res: Response): Promise<void> {
        const classroom = await db.query('select * from aula');
        console.log(classroom);
        res.json(classroom);
    }
    
    public async classroomById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { idB } = req.params;
        const classroom = await db.query('select * from aula WHERE COD_EDIFICIO=? AND COD_AULA=?', [id,idB]);
        console.log(classroom);
        res.json(classroom);
    } 
    public async classroomByBuilding(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const classroom = await db.query('select * from aula WHERE COD_EDIFICIO=?', [id]);
        console.log(classroom);
        res.json(classroom);
    } 

    public async create(req: Request, res: Response): Promise<void> {
        const result = await db.query('INSERT INTO sede set ?', [req.body]);
        res.json({ message: 'classroom Saved' });
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
        res.json({ message: "The classroom was deleted" });
    }

}

export const classroomController = new ClassroomController();