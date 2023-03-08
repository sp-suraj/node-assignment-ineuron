import { Request, Response } from "express";
import {
  saveBook,
  removeBook,
  allBooks,
  oneBook,
  updateThisBook,
} from "./item.repository";

const getOneBook = async (req: Request, res: Response) => {
  const response = await oneBook(req.params.id);
  res.send(response);
};

const getAllBook = async (req: Request, res: Response) => {
  const response = await allBooks();
  res.send(response);
};

const createBook = async (req: Request, res: Response) => {
  const { name, author } = req.body;
  console.log(req.body);
  const result = await saveBook(name, author);
  res.status(201).json(result);
};

const updateBook = async (req: Request, res: Response) => {
  const updatedBook = await updateThisBook(req.params.id, req.body);
  res.send(updatedBook);
};

const deleteBook = async (req: Request, res: Response) => {
  const response = await removeBook(req.params.id);
  res.send(response);
};

export { getOneBook, getAllBook, updateBook, deleteBook, createBook };
