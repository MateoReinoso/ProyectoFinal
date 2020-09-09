import { Router } from 'express';

class ShoolRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', (req, res) => res.send('Shool'));
    }
}

const schoolRoutes = new ShoolRoutes();
export default schoolRoutes.router;