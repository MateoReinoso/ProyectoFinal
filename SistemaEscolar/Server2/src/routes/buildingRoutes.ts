import { Router } from 'express';

import { buildingController } from '../controllers/buildingController';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{

        this.router.get('/', buildingController.building);
        this.router.get('/:id/:idB', buildingController.buildingById);
        this.router.get('/:id', buildingController.buildingByCampus);
        this.router.post('/', buildingController.create);
        this.router.put('/:id', buildingController.update);
        this.router.delete('/:id', buildingController.delete);
        
       
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;