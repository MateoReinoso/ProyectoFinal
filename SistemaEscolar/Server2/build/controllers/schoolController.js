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
            const curs = yield database_1.default.query('SELECT DISTINCTROW aa.MATERIA, p.APELLIDO, p.NOMBRE FROM alumno_asignatura_periodo aap, persona p, asignatura aa WHERE aap.COD_DOCENTE = ? AND aap.COD_ASIGNATURA = ? AND aa.COD_ASIGNATURA = aap.COD_ASIGNATURA AND aap.COD_ALUMNO = p.COD_PERSONA ORDER BY APELLIDO ASC', [id, ids]);
            console.log(curs);
            res.json(curs);
        });
    }
    primero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idp } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA1, aap.NOTA2, aap.NOTA3, aap.NOTA4, aap.NOTA5 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idp]);
            console.log(curs);
            res.json(curs);
        });
    }
    segundo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idqs } = req.params;
            const cursq = yield database_1.default.query('SELECT DISTINCTROW a.MATERIA, aap.NOTA6, aap.NOTA7, aap.NOTA8, aap.NOTA9, aap.NOTA10 FROM alumno_asignatura_periodo aap, asignatura a WHERE aap.COD_ALUMNO = ? AND a.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND aap.COD_ASIGNATURA = a.COD_ASIGNATURA', [idqs]);
            console.log(cursq);
            res.json(cursq);
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
    VerDeberes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ca } = req.params;
            const { cal } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCT a.MATERIA, ta.DETALLE_TAREA FROM tarea_asignatura ta, alumno_asignatura_periodo aap, asignatura a WHERE ta.COD_ASIGNATURA = ? AND aap.COD_ASIGNATURA = ta.COD_ASIGNATURA AND aap.COD_ALUMNO = ? AND ta.COD_NIVEL_EDUCATIVO = aap.COD_NIVEL_EDUCATIVO AND a.COD_ASIGNATURA = ta.COD_ASIGNATURA', [ca, cal]);
            console.log(curs);
            res.json(curs);
        });
    }
    Materias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mat } = req.params;
            const curs = yield database_1.default.query('SELECT DISTINCTROW a.COD_ASIGNATURA, a.MATERIA FROM persona p, asignatura a, alumno_asignatura_periodo aap WHERE p.COD_PERSONA = ? AND aap.COD_ALUMNO = p.COD_PERSONA AND aap.COD_NIVEL_EDUCATIVO = a.COD_NIVEL_EDUCATIVO', [mat]);
            console.log(curs);
            res.json(curs);
        });
    }
}
exports.schoolController = new SchoolController();
