import express from "express";
import { OvertimeController } from "./controllers/OvertimeController";
import { OvertimeRepositoryFirebaseImp } from "./repository/OvertimeRepositoryFirebaseImp";

const overtimeRepositoryFirebaseImp = new OvertimeRepositoryFirebaseImp();
const overtimeController = new OvertimeController(overtimeRepositoryFirebaseImp);

const app = express();
app.use(express.json());

app.post('/api/overtime', overtimeController.create);

app.listen(3003,function(){
    console.log("servidor funcionando na porta 3003");
});