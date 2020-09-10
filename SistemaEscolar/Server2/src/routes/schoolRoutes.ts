import { Router } from 'express';

import { schoolController } from '../controllers/schoolController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id/:ids', schoolController.curso);
        //agregar los cursos 
        this.router.get('/:idQ1', schoolController.RevisonNotasQ1);
        this.router.get('/:idQ2', schoolController.RevisonNotasQ2);
        this.router.get('/debere/:ca/:cn', schoolController.VerDeberes);
        this.router.put('/:id/:sdi', schoolController.updateDeberes);
        this.router.put('/:id/:sdiT', schoolController.updateTalleres);
        this.router.put('/:id/:sdiL', schoolController.updateLaboratorio);
        this.router.put('/:id/:sdiP', schoolController.updatePruebas);
        this.router.put('/:id/:sdiE', schoolController.updateExamenes);
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;