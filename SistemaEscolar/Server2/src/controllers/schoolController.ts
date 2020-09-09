import {Request, Response } from 'express';

import db from '../database';

class SchoolController{
    public async curso(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { ids } = req.params;
        const curs = await db.query('SELECT aap.COD_NIVEL_EDUCATIVO, aap.COD_ASIGNATURA, p.APELLIDO, p.NOMBRE,  aa.MATERIA FROM alumno_asignatura_periodo aap, asignatura_periodo ap, persona p, aula a, asignatura aa WHERE aap.COD_NIVEL_EDUCATIVO = ? AND aap.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA=aa.COD_ASIGNATURA AND ap.COD_DOCENTE = aap.COD_DOCENTE AND p.COD_PERSONA = aap.COD_ALUMNO ORDER BY APELLIDO ASC', [id, ids]);
        console.log(curs);
        res.json(curs);
    } 

    public async updateDeberes(req: Request, res: Response):Promise<void> {
        const {id} = req.params;
        const {sdi} = req.params;
        await db.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdi]);
        res.json({message: 'Ingreso de notas'})
    }

}

export const schoolController = new SchoolController();