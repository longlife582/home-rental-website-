const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const uuid = require("uuid");
const db = require("./db");

// create your app
const app = express();

// declear the port
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("Entered");
  next();
});

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    credentials: true,
  })
);

// app.post("/", (req, res) => {
//   const { first_name, last_name } = req.body;

//   try {
//     if (!first_name) throw Error("insect your first name");
//     res.status(200).json({
//       message: `your request have been recorder`,
//     });
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

app.post("/add", async (req, res) => {
  const { address, price, room_type, description } = req.body;
  try {
    if (!address) throw Error("insert your address");
    if (!price) throw Error("insert your price");
    if (!room_type) throw Error("insert your room type");
    if (!description) throw Error("insert your description");

    const id = uuid.v4();

    let sql = `INSERT INTO properties (id,address,room_type,price,description) VALUE('${id}','${address}','${room_type}','${price}', '${description}')`;

    await db.execute(sql);

    res.status(200).json({ message: "property Added Successfully" });
  } catch (error) {
    res.status(400).json({ erorr: error.message });
  }
});

app.get("/getALLPRO/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let sql = `SELECT * FROM properties WHERE id = '${id}'`;
    const [item] = await db.execute(sql);

    res.status(200).json({ item });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/getALL", async (req, res) => {
  try {
    let sql = `SELECT * FROM properties`;
    const item = await db.execute(sql);
    res.status(200).json({ item });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// add your listen port
app.listen(PORT, () => {
  console.log(`Listening From ${PORT}`);
});
