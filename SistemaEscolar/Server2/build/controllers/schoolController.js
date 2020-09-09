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
exports.schoolController = void 0;
const database_1 = __importDefault(require("../database"));
class SchoolController {
    curso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { ids } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW aap.COD_NIVEL_EDUCATIVO, aap.COD_ASIGNATURA, p.APELLIDO, p.NOMBRE,  aa.MATERIA FROM alumno_asignatura_periodo aap, asignatura_periodo ap, persona p, aula a, asignatura aa WHERE aap.COD_NIVEL_EDUCATIVO = ? AND aap.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA=aa.COD_ASIGNATURA AND ap.COD_DOCENTE = aap.COD_DOCENTE AND p.COD_PERSONA = aap.COD_ALUMNO ORDER BY APELLIDO ASC', [id, ids]);
            console.log(curs);
            res.json(curs);
        });
    }
    RevisonNotasQ1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idQ1 } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA1, aap.NOTA2, aap.NOTA3, aap.NOTA4, aap.NOTA5 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idQ1]);
            console.log(curs);
            res.json(curs);
        });
    }
    RevisonNotasQ2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idQ2 } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA6, aap.NOTA7, aap.NOTA8, aap.NOTA9, aap.NOTA10 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idQ2]);
            console.log(curs);
            res.json(curs);
        });
    }
    updateDeberes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdi } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdi]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updateTalleres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiT } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiT]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updateLaboratorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiL } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiL]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updatePruebas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiP } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiP]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
    updateExamenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { sdiE } = req.params;
            yield database_1.default.query('UPDATE alumno_asignatura_periodo aap SET ? WHERE aap.COD_ASIGNATURA = ? AND aap.COD_ALUMNO = ?', [req.body, id, sdiE]);
            res.json({ message: 'Ingreso de notas' });
        });
    }
}
exports.schoolController = new SchoolController();