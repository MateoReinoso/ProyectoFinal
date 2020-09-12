import { Router } from 'express';

import { classroomController } from '../controllers/classroomController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{

        this.router.get('/', classroomController.classroom);
        this.router.get('/:id', classroomController.classroomById);
        this.router.post('/', classroomController.create);
        this.router.put('/:id', classroomController.update);
        this.router.delete('/:id', classroomController.delete);
       
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;