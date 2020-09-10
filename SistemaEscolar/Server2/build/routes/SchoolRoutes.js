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
        this.router.get('/:id/:ids', schoolController_1.schoolController.curso);
        //agregar los cursos 
        this.router.get('/:idQ1', schoolController_1.schoolController.RevisonNotasQ1);
        this.router.get('/:idQ2', schoolController_1.schoolController.RevisonNotasQ2);
        this.router.get('/debere/:ca/:cn', schoolController_1.schoolController.VerDeberes);
        this.router.put('/:id/:sdi', schoolController_1.schoolController.updateDeberes);
        this.router.put('/:id/:sdiT', schoolController_1.schoolController.updateTalleres);
        this.router.put('/:id/:sdiL', schoolController_1.schoolController.updateLaboratorio);
        this.router.put('/:id/:sdiP', schoolController_1.schoolController.updatePruebas);
        this.router.put('/:id/:sdiE', schoolController_1.schoolController.updateExamenes);
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
