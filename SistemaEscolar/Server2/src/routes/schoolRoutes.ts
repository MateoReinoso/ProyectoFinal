import { Router } from 'express';

import { schoolController } from '../controllers/schoolController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id/:ids', schoolController.curso);
        this.router.put('/:id/:sdi', schoolController.updateDeberes);
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;