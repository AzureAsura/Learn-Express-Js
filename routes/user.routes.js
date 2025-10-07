import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/',  getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send({title: 'CREATE all users'}));

userRouter.put('/', (req, res) => res.send({title: 'UPDATE all users'}));

userRouter.delete('/', (req, res) => res.send({title: 'DELETE all users'}));

export default userRouter;