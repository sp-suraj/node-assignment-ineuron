import express from "express";
import {
  createBook,
  updateBook,
  deleteBook,
  getOneBook,
  getAllBook,
} from "../items/item.service";

const router = express.Router();

router.get("/", getAllBook);

router.get("/:id", getOneBook);

router.post("/add", createBook);

router.patch("/update/:id", updateBook);

router.delete("/delete/:id", deleteBook);

export default router;
