import { Router } from 'express';

import { campusController } from '../controllers/campusController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{

        this.router.get('/', campusController.campus);
        this.router.get('/:id', campusController.campusById);
        this.router.post('/', campusController.create);
        this.router.put('/:id', campusController.update);
        this.router.delete('/:id', campusController.delete);
       
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;