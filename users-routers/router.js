import express from 'express';
const userRouter = express.Router();
import { UserCtrl } from "../controller/userCtrl.js";




userRouter.get('/contact', UserCtrl.getContactController);
userRouter.post('/contact', UserCtrl.postContactController);
userRouter.delete('/contact', UserCtrl.deleteContactController);
userRouter.put('/contact', UserCtrl.putContactController);

export default userRouter;