"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildingController = void 0;
const database_1 = __importDefault(require("../database"));
class BuildingController {
    building(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const building = yield database_1.default.query('select * from edificio');
            console.log(building);
            res.json(building);
        });
    }
    buildingById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const building = yield database_1.default.query('select * from edificio WHERE COD_EDIFICIO=?', [id]);
            console.log(building);
            res.json(building);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO edificio set ?', [req.body]);
            res.json({ message: 'building Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE edificio set ? WHERE COD_EDIFICIO = ?', [req.body, id]);
            res.json({ message: "The game was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM sede WHERE id = ?', [id]);
            res.json({ message: "The building was deleted" });
        });
    }
}
exports.buildingController = new BuildingController();