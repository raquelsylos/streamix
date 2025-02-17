// arquivo que cria conexão e puxa pro server.js
// await async

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://raquelsylos:I6etBCC1N8Qoc107@cluster0.kybw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("streamix");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
