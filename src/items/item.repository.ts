import Book from "./item.model";
import { Request } from "express-serve-static-core";

const saveBook = async (bookName: String, autherName: String) => {
  const book = new Book({
    name: bookName,
    author: autherName,
  });
  return book.save();
};

const allBooks = async () => {
  return Book.find({});
};

const oneBook = async (id: String) => {
  return Book.find({ _id: id });
};

const removeBook = (id: String) => {
  return Book.findByIdAndDelete(id);
};
const updateThisBook = (id: String, req: Request) => {
  return Book.findByIdAndUpdate(id, { $set: req }, { new: true });
};

export { saveBook, removeBook, allBooks, oneBook, updateThisBook };
