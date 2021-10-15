import express from "express";
import './database';

import { OvertimeController } from "./controllers/OvertimeController";
import { UserController } from "./controllers/UserController";

const overtimeController = new OvertimeController();
const userController = new UserController();

const app = express();
app.use(express.json());

app.get('/api/overtime', overtimeController.getAll);
app.get('/api/overtime/:id', overtimeController.show);
app.post('/api/overtime', overtimeController.create);
app.put('/api/overtime/:id', overtimeController.update);
app.post('/api/user', userController.create);

const port = 3003;

app.listen(port,function(){
    console.log(`Server working on port:${port}`);
});