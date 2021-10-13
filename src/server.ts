import express from "express";
import { OvertimeController } from "./controllers/OvertimeController";
import { OvertimeRepositoryMock } from "./repository/OvertimeRepositoryMock";

const overtimeRepositoryMock = new OvertimeRepositoryMock();
const overtimeController = new OvertimeController(overtimeRepositoryMock);

const app = express();
app.use(express.json());

app.post('/api/overtime', overtimeController.create);

app.listen(3003,function(){
    console.log("servidor funcionando na porta 3003");
});