import { Schema, model } from 'mongoose';

interface IBooks {
  name: string;
  author: string;
}

const bookSchema = new Schema<IBooks>({
  name: { type: String, required: true },
  author: { type: String, required: true }
});

const Book = model<IBooks>('User', bookSchema);

export default Book