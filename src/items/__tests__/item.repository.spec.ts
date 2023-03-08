import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import Book from "../item.model";
const {
  saveBook,
  removeBook,
  allBooks,
  oneBook,
  updateThisBook,
} = require("../item.repository");

describe("item repository tests", () => {
  beforeAll(async () => {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    mongoose.connect(uri);
  });

  afterEach(async () => {
    await Book.deleteMany({});
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("#saveBook", () => {
    it("should save new Book data successfully", async () => {
      const testBook = {
        name: "Ramayan",
        author: "Valmiki",
      };

      const savedBook = await saveBook(testBook.name, testBook.author);
      await expect(savedBook).toMatchObject(testBook);
    });
  });

  describe("#updateOneBook", () => {
    it("should update new Book data successfully", async () => {
      const testBook = {
        name: "B1",
        author: "Suraj",
      };

      const savedBook = await Book.create(testBook);
      const newUpdate = {
        name: "B2",
      };
      var updatedBook = await updateThisBook(savedBook._id, newUpdate);
      await expect(updatedBook).toMatchObject(newUpdate);
    });
  });

  describe("#removeBook", () => {
    it("should delete a saved Book successfully", async () => {
      const testBook = {
        name: "P1",
        author: "Aasha",
      };
      const newBook = await Book.create(testBook);
      await removeBook(newBook._id);
      await expect(Book.count()).resolves.toBe(0);
    });
  });

  describe("#oneBook", () => {
    it("passed with BookId should return a saved Book successfully", async () => {
      const testBook = {
        name: "P1",
        author: "Sharad",
      };
      const savedBook = await Book.create(testBook);
      const readBook = await oneBook(savedBook._id);
      await expect(readBook).toEqual(readBook);
    });
  });

  describe("#allBooks", () => {
    it("should return all the saved Books successfully", async () => {
      const testBook1 = {
        name: "P1",
        author: "Sunil",
      };
      const testBook2 = {
        name: "P2",
        author: "Ram",
      };
      await saveBook(testBook1.name, testBook1.author);
      await saveBook(testBook2.name, testBook2.author);
      const allTheBooks = await allBooks();
      await expect(allTheBooks.length).toBe(2);
    });
  });
});
