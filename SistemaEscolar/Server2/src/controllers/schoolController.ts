import {Request, Response } from 'express';

import db from '../database';

class SchoolController{
    public async curso(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { ids } = req.params;
        const curs = await db.query('SELECT DISTINCTROW aap.COD_NIVEL_EDUCATIVO, aap.COD_ASIGNATURA, p.APELLIDO, p.NOMBRE,  aa.MATERIA FROM alumno_asignatura_periodo aap, asignatura_periodo ap, persona p, aula a, asignatura aa WHERE aap.COD_NIVEL_EDUCATIVO = ? AND aap.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA=aa.COD_ASIGNATURA AND ap.COD_DOCENTE = aap.COD_DOCENTE AND p.COD_PERSONA = aap.COD_ALUMNO ORDER BY APELLIDO ASC', [id, ids]);
        console.log(curs);
        res.json(curs);
    } 

    public async RevisonNotasQ1(req: Request, res: Response): Promise<void> {
        const { idQ1 } = req.params;
        const curs = await db.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA1, aap.NOTA2, aap.NOTA3, aap.NOTA4, aap.NOTA5 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idQ1]);
        console.log(curs);
        res.json(curs);
    }
    
    public async RevisonNotasQ2(req: Request, res: Response): Promise<void> {
        const { idQ2 } = req.params;
        const curs = await db.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA6, aap.NOTA7, aap.NOTA8, aap.NOTA9, aap.NOTA10 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idQ2]);
        console.log(curs);
        res.json(curs);
    } 

    public async updateDeberes(req: Request, res: Response):Promise<void> {
        const {id} = req.params;
        const {sdi} = req.params;
        await db.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdi]);
        res.json({message: 'Ingreso de notas'})
    }
    public async updateTalleres(req: Request, res: Response):Promise<void> {
        const {id} = req.params;
        const {sdiT} = req.params;
        await db.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiT]);
        res.json({message: 'Ingreso de notas'})
    }
    public async updateLaboratorio(req: Request, res: Response):Promise<void> {
        const {id} = req.params;
        const {sdiL} = req.params;
        await db.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiL]);
        res.json({message: 'Ingreso de notas'})
    }

    public async updatePruebas(req: Request, res: Response):Promise<void> {
        const {id} = req.params;
        const {sdiP} = req.params;
        await db.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiP]);
        res.json({message: 'Ingreso de notas'})
    }

    public async updateExamenes(req: Request, res: Response):Promise<void> {
        const {id} = req.params;
        const {sdiE} = req.params;
        await db.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiE]);
        res.json({message: 'Ingreso de notas'})
    }



}

export const schoolController = new SchoolController();