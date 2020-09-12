export interface Login{
    COD_USUARIO?: number;
    COD_PERSONA?: number;
    NOMBRE_USUARIO: string;
    CLAVE: string,
    ESTADO: string;
    ULT_FECHA_INGRESO: Date;
    INTENTOS_FALLIDOS: number;
    COD_ROL: number;
    NOMBRE: string;
}

export class Subject{
    public COD_MATERIA?: number;
    public MATERIA?: string;
}


export interface ISession {
    session: Object;
}