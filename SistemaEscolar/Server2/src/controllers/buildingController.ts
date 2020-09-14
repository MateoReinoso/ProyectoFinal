import {Request, Response } from 'express';

import db from '../database';

class BuildingController{
    public async building(req: Request, res: Response): Promise<void> {
        const building = await db.query('select * from edificio');
        console.log(building);
        res.json(building);
    } 
    public async buildingById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { idB } = req.params;
        const building = await db.query('select * from edificio WHERE COD_SEDE=? AND COD_EDIFICIO=?', [id, idB]);
        console.log(building);
        res.json(building);
    } 
    public async buildingByCampus(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const building = await db.query('SELECT * FROM edificio WHERE COD_SEDE=?', [id]);
        console.log(building);
        res.json(building);
    } 

    public async create(req: Request, res: Response): Promise<void> {
        const result = await db.query('INSERT INTO edificio set ?', [req.body]);
        res.json({ message: 'building Saved' });
    }
    
    

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await db.query('UPDATE edificio set ? WHERE COD_EDIFICIO = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM edificio WHERE COD_EDIFICIO = ?', [id]);
        res.json({ message: "The building was deleted" });
    }

}

export const buildingController = new BuildingController();