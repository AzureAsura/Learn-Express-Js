import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title: 'GET all users'}));

userRouter.get('/:id', (req, res) => res.send({title: 'GET users details'}));

userRouter.post('/', (req, res) => res.send({title: 'CREATE all users'}));

userRouter.put('/', (req, res) => res.send({title: 'UPDATE all users'}));

userRouter.delete('/', (req, res) => res.send({title: 'DELETE all users'}));

export default userRouter;