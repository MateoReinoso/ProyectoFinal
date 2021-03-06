import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import shoolRoutes from './routes/schoolRoutes';
import loginRoutes from './routes/loginRoutes';

import campusRoutes from './routes/campusRoutes';
import buildingRoutes from './routes/buildingRoutes';
import classroomRoutes from './routes/classroomRoutes';


class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000); 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/system/school',shoolRoutes);
        this.app.use('/system/login',loginRoutes);
        this.app.use('/system/campus',campusRoutes);
        this.app.use('/system/building',buildingRoutes);

        this.app.use('/system/classroom',classroomRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();