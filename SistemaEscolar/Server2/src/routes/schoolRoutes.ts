import { Router } from 'express';

import { schoolController } from '../controllers/schoolController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{

        //Ver Materias profeso
        this.router.get('/materias/:mp', schoolController.MateriasProfesor);
        //Listado estudiantes profesor
        this.router.get('/liststudent/:id/:ids', schoolController.curso);
        //Notas por quimestre
        this.router.get('/p/q/:idp', schoolController.primero);
        this.router.get('/s/q/c/:idqs', schoolController.segundo);
        //Ver deberes
        this.router.get('/deberes/:ca/:cal', schoolController.VerDeberes);
        //Obtencion Asignacion Deberes
        this.router.get('/asignar/:asdb', schoolController.AsignacionDeberes);
        //Asignatuira solo alumno
        this.router.get('/alumn/cod/:npa/:cae', schoolController.smp);
        this.router.get('/alumn/cod/seg/:npas/:caes', schoolController.sms)
        //Ingreso de notas
        this.router.put('/npp/:id/:sdi', schoolController.updateDeberes);
        this.router.put('/talleres/:id/:sdiT', schoolController.updateTalleres);
        this.router.put('/laboratorio/:id/:sdiL', schoolController.updateLaboratorio);
        this.router.put('/pruebas/:id/:sdiP', schoolController.updatePruebas);
        this.router.put('/examenes/:id/:sdiE', schoolController.updateExamenes);
        //ver materias
        this.router.get('/:mat', schoolController.Materias);
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;