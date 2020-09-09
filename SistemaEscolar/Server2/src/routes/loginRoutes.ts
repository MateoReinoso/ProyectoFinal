import { Router } from 'express';
import { loginController } from '../controllers/loginController';

class LoginRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:user/:pass', loginController.login);
        this.router.put('/:user', loginController.updateLastLogin);
    }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;