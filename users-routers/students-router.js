import express from 'express';
const studentRouter = express.Router();
import { StudentCtrl } from "../controller/studentCtrl.js";




studentRouter.get('/students/:_id', StudentCtrl.getOne);
studentRouter.get('/students', StudentCtrl.getMany);
studentRouter.post('/students', StudentCtrl.postOne);

export default studentRouter;