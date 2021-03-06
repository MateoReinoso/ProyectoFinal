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
        //agregar deberes
        this.router.get('/est/deb/al/q/:eds/:dse', schoolController.SubirDeberes);
        //DEberes estudiantes asiganr
        //obtener nivel
        this.router.get('/nivel/:ob',schoolController.ObtenerNivel);
        //obtener datos inserccion
        this.router.get('/aula/:dcd/:dca/:dcne', schoolController.DatosCreacion);
        //Subir Deberes
        this.router.post('/',schoolController.EntregarTarea);
        //obtener datos mandados
        this.router.get('/deberes/asignados/:odd/:odca/:odcne/:odcp', schoolController.ObtencionDeberes)
        //actualizar deber
        this.router.put('/deberactualizado/:COD_TAREA', schoolController.UpdateEntrega);
        //para la toma de asistencia
        //obtencion nivel lista
        this.router.get('/', schoolController.NivelEducativo);
        //obtencion del paralelo
        this.router.get('/paralelo/nombre/:obe', schoolController.ObtenerParalelo);
        //obtencion estudiantes por paralelo
        this.router.get('/paralelo/nombre/estudiantes/listado/:lpn/:lpp', schoolController.ListaParalelo);
        //registrar asistencia
        this.router.post('/asistencia',schoolController.InsertarAsistenci);
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;