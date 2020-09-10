import { Router } from 'express';

import { schoolController } from '../controllers/schoolController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{

        this.router.get('/:id/:ids', schoolController.curso);
        //Notas por quimestre
        this.router.get('/p/q/:idp', schoolController.primero);
        this.router.get('/s/q/c/:idqs', schoolController.segundo);
        //Ver deberes
        this.router.get('/deberes/:ca/:cn', schoolController.VerDeberes);
        //Ingreso de notas
        this.router.put('/:id/:sdi', schoolController.updateDeberes);
        this.router.put('/:id/:sdiT', schoolController.updateTalleres);
        this.router.put('/:id/:sdiL', schoolController.updateLaboratorio);
        this.router.put('/:id/:sdiP', schoolController.updatePruebas);
        this.router.put('/:id/:sdiE', schoolController.updateExamenes);
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;