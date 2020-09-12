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
        //dfs
        this.router.get('/:id/:ids', schoolController_1.schoolController.curso);
        //Notas por quimestre
        this.router.get('/p/q/:idp', schoolController_1.schoolController.primero);
        this.router.get('/s/q/c/:idqs', schoolController_1.schoolController.segundo);
        //Ver deberes
        this.router.get('/deberes/:ca/:cal', schoolController_1.schoolController.VerDeberes);
        //Ingreso de notas
        this.router.put('/:id/:sdi', schoolController_1.schoolController.updateDeberes);
        this.router.put('/:id/:sdiT', schoolController_1.schoolController.updateTalleres);
        this.router.put('/:id/:sdiL', schoolController_1.schoolController.updateLaboratorio);
        this.router.put('/:id/:sdiP', schoolController_1.schoolController.updatePruebas);
        this.router.put('/:id/:sdiE', schoolController_1.schoolController.updateExamenes);
        //ver materias
        this.router.get('/:mat', schoolController_1.schoolController.Materias);
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
