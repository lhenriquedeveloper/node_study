import { Request, Response } from "express";
import { UserModel } from '../database/models/UserModel';

class UserController {
  //Start FindALL Method
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0 ?
      res.status(200).json(users)
      : res.status(204).json();
  }
  //Start FindOne Method
  async findOne(req: Request, res: Response) {
    const user = await UserModel.findOne({
      where:
        { id: req.params.userId }
    });
    return user ?
      res.status(200).json(user)
      : res.status(204).send();
  }
  //Start Create Method
  async create(req: Request, res: Response) {
    const { email, nome, idade } = req.body;
    const user = await UserModel.create({
      email, nome, idade
    });
    return res.status(201).json(user);
  }
  // Start Update Method
  async update(req: Request, res: Response) {
    const { email, nome, idade } = req.body;
    const user = await UserModel.update({
      email, nome, idade
    }, {
      where: { id: req.params.userId }
    });
    return res.status(204).send();
  }
  //Start Delete Method
  async destroy(req: Request, res: Response) {
    await UserModel.destroy({
      where: { id: req.params.userId }
    });
    return res.status(204).send();
  }

}


export default new UserController();