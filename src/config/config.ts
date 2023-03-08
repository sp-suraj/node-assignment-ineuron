
const MONGO_URL = "mongodb://127.0.0.1:27017/books";

const PORT = process.env.PORT || 4001;

export const config = {

  url: MONGO_URL,
  port: PORT
}