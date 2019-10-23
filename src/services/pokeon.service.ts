import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
import { Pokemon } from "../models/pokemon.model";
import { WELCOME_MESSAGE } from "../constants/pokeApi.constants";
export class PokeService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }
  public getAllPokemon(req: Request, res: Response) {
    Pokemon.find({}, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }
  public addNewPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save((error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }
}
