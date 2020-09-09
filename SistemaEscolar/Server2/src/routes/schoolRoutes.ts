import { Router } from 'express';

import { schoolController } from '../controllers/schoolController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id/:ids', schoolController.curso);
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;