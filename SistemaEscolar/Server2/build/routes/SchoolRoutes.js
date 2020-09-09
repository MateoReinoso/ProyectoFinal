"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ShoolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Shool'));
    }
}
const schoolRoutes = new ShoolRoutes();
exports.default = schoolRoutes.router;
