import {Request, Response } from 'express';

import db from '../database';

class SchoolController{
    public async curso(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { ids } = req.params;
        const curs = await db.query('SELECT DISTINCTROW aap.COD_ALUMNO, aa.MATERIA, p.APELLIDO, p.NOMBRE FROM alumno_asignatura_periodo aap, persona p, asignatura aa WHERE aap.COD_DOCENTE = ? AND aap.COD_ASIGNATURA = ? AND aa.COD_ASIGNATURA = aap.COD_ASIGNATURA AND aap.COD_ALUMNO = p.COD_PERSONA ORDER BY APELLIDO ASC', [id, ids]);
        console.log(curs);
        res.json(curs);
    } 

    public async primero(req: Request, res: Response): Promise<void> {
        const { idp } = req.params;
        const curs = await db.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA1, aap.NOTA2, aap.NOTA3, aap.NOTA4, aap.NOTA5 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idp]);
        console.log(curs);
        res.json(curs);
    }
    
    public async segundo(req: Request, res: Response): Promise<void> {
        const { idqs } = req.params;
        const cursq = await db.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA6, aap.NOTA7, aap.NOTA8, aap.NOTA9, aap.NOTA10 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idqs]);
        console.log(cursq);
        res.json(cursq);
    }
    
    public async smp(req: Request, res: Response): Promise<void> {
        const { npa } = req.params;
        const { cae } = req.params;
        const cursq = await db.query('SELECT DISTINCTROW aap.NOTA1, aap.NOTA2, aap.NOTA3, aap.NOTA4, aap.NOTA5 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [npa,cae]);
        console.log(cursq);
        res.json(cursq);
    }

    public async sms(req: Request, res: Response): Promise<void> {
        const { npas } = req.params;
        const { caes } = req.params;
        const cursq = await db.query('SELECT DISTINCTROW aap.NOTA6, aap.NOTA7, aap.NOTA8, aap.NOTA9, aap.NOTA10 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [npas,caes]);
        console.log(cursq);
        res.json(cursq);
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

    public async VerDeberes(req: Request, res: Response): Promise<void> {
        const { ca } = req.params;
        const { cal } = req.params;
        const curs = await db.query('SELECT DISTINCT a.MATERIA, ta.DETALLE_TAREA FROM tarea_asignatura ta, alumno_asignatura_periodo aap, asignatura a WHERE ta.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA = ta.COD_ASIGNATURA AND aap.COD_ALUMNO = ? AND ta.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND a.COD_ASIGNATURA = ta.COD_ASIGNATURA', [ca,cal]);
        console.log(curs);
        res.json(curs);
    } 

    public async Materias(req: Request, res: Response): Promise<void> {
        const { mat } = req.params;
        const curs = await db.query('SELECT DISTINCTROW a.COD_ASIGNATURA, a.MATERIA FROM persona p, asignatura a, alumno_asignatura_periodo aap WHERE p.COD_PERSONA = ? AND aap.COD_ALUMNO = p.COD_PERSONA AND aap.COD_NIVEL_EDUCATIVO = a.COD_NIVEL_EDUCATIVO', [mat]);
        console.log(curs);
        res.json(curs);
    } 

    public async MateriasProfesor(req: Request, res: Response): Promise<void> {
        const { mp } = req.params;
        const curs = await db.query('SELECT DISTINCTROW a.COD_ASIGNATURA, a.MATERIA FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_DOCENTE = ? AND a.COD_ASIGNATURA = aap.COD_ASIGNATURA', [mp]);
        console.log(curs);
        res.json(curs);
    }
    
    public async AsignacionDeberes(req: Request, res: Response): Promise<void> {
        const { asdb } = req.params;
        const curs = await db.query('SELECT DISTINCTROW ap.COD_ASIGNATURA, ap.COD_PERIODO_LECTIVO, ap.COD_NIVEL_EDUCATIVO, a.MATERIA FROM asignatura_periodo ap, asignatura a, alumno_asignatura_periodo aap WHERE aap.COD_DOCENTE = ? AND ap.COD_DOCENTE = aap.COD_DOCENTE AND ap.COD_ASIGNATURA = a.COD_ASIGNATURA AND a.COD_ASIGNATURA = aap.COD_ASIGNATURA', [asdb]);
        console.log(curs);
        res.json(curs);
    }    

    public async SubirDeberes(req: Request, res: Response): Promise<void> {
        const { eds } = req.params;
        const curs = await db.query('SELECT DISTINCTROW ap.COD_ASIGNATURA, ap.COD_NIVEL_EDUCATIVO, ap.COD_PERIODO_LECTIVO FROM asignatura_periodo ap, asignatura a, alumno_asignatura_periodo aap WHERE aap.COD_DOCENTE = ? AND ap.COD_DOCENTE = aap.COD_DOCENTE AND ap.COD_ASIGNATURA = a.COD_ASIGNATURA AND a.COD_ASIGNATURA = aap.COD_ASIGNATURA', [eds]);
        console.log(curs);
        res.json(curs);
    }  

}

export const schoolController = new SchoolController();