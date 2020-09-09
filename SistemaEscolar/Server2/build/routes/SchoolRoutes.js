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
        this.router.put('/:id/:sdi', schoolController_1.schoolController.updateDeberes);
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
