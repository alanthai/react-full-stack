import { Router } from 'express';

import { userController } from './users.controller';


export const usersRouter = Router();

usersRouter.route('')
  .get((_, res) => {
    userController.getList()
      .then(users => res.json(users));
  })
  .post((req, res) => {
    userController.add(req.body)
      .then((user) => res.json(user));
  });

usersRouter.route('/:id')
  .get((req, res) => {
    userController.get(req.params.id)
      .then((user) => res.json(user));
  })
  .delete((req, res) => {
    userController.remove(req.params.id)
      .then(() => res.json(req.params.id));
  })
  .put((req, res) => {
    userController.update(req.params.id, req.body)
      .then((user) => res.json(user));
  });
