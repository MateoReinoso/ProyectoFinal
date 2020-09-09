import {Request, Response } from 'express';
import { Md5 } from 'md5-typescript';
import db from '../database';

class LoginController{
    public async login(req: Request, res: Response): Promise<void> {
        const { user } = req.params;
        const { pass } = req.params;
        const encriptedpass = Md5.init(pass);
        const auth = await db.query(`SELECT * FROM usuario u 
        INNER JOIN rol_usuario ru on u.COD_USUARIO=ru.COD_USUARIO
        INNER JOIN rol r on r.COD_ROL=ru.COD_ROL
        where u.ESTADO='ACT' AND ru.ESTADO='ACT' AND u.NOMBRE_USUARIO = ? AND u.CLAVE = ?`, [user, encriptedpass]);
        console.log(auth);
        res.json(auth);
    } 

    public async updateLastLogin(req: Request, res: Response):Promise<void> {
        const {user} = req.params;
        const date = new Date();
        await db.query('UPDATE usuario SET ULT_FECHA_INGRESO= ?  WHERE NOMBRE_USUARIO = ?', [req.body,date, user]);
        console.log(res);
        res.json({message: 'actualizacion de fecha de usuario'});
    }

}

export const loginController = new LoginController();