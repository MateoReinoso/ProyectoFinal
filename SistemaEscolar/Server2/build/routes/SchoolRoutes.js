"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolController_1 = require("../controllers/schoolController");
class ShoolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ver Materias profeso
        this.router.get('/materias/:mp', schoolController_1.schoolController.MateriasProfesor);
        //Listado estudiantes profesor
        this.router.get('/liststudent/:id/:ids', schoolController_1.schoolController.curso);
        //Notas por quimestre
        this.router.get('/p/q/:idp', schoolController_1.schoolController.primero);
        this.router.get('/s/q/c/:idqs', schoolController_1.schoolController.segundo);
        //Ver deberes
        this.router.get('/deberes/:ca/:cal', schoolController_1.schoolController.VerDeberes);
        //Obtencion Asignacion Deberes
        this.router.get('/asignar/:asdb', schoolController_1.schoolController.AsignacionDeberes);
        //Asignatuira solo alumno
        this.router.get('/alumn/cod/:npa/:cae', schoolController_1.schoolController.smp);
        this.router.get('/alumn/cod/seg/:npas/:caes', schoolController_1.schoolController.sms);
        //Ingreso de notas
        this.router.put('/npp/:id/:sdi', schoolController_1.schoolController.updateDeberes);
        this.router.put('/talleres/:id/:sdiT', schoolController_1.schoolController.updateTalleres);
        this.router.put('/laboratorio/:id/:sdiL', schoolController_1.schoolController.updateLaboratorio);
        this.router.put('/pruebas/:id/:sdiP', schoolController_1.schoolController.updatePruebas);
        this.router.put('/examenes/:id/:sdiE', schoolController_1.schoolController.updateExamenes);
        //ver materias
        this.router.get('/:mat', schoolController_1.schoolController.Materias);
        //agregar deberes
        this.router.get('/est/deb/al/q/:eds/:dse', schoolController_1.schoolController.SubirDeberes);
        //DEberes estudiantes asiganr
        //obtener nivel
        this.router.get('/nivel/:ob', schoolController_1.schoolController.ObtenerNivel);
        //obtener datos inserccion
        this.router.get('/aula/:dcd/:dca/:dcne', schoolController_1.schoolController.DatosCreacion);
        //Subir Deberes
        this.router.post('/', schoolController_1.schoolController.EntregarTarea);
        //obtener datos mandados
        this.router.get('/deberes/asignados/:odd/:odca/:odcne/:odcp', schoolController_1.schoolController.ObtencionDeberes);
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
