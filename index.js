const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World! Hello");
});

const users = [
  {
    id: 0,
    name: "Susmita",
    email: "susmita@gmail.com",
    phone: "0141-23456254",
  },
  {
    id: 1,
    name: "Sabana",
    email: "sabana@gmail.com",
    phone: "0191-23456254",
  },
  {
    id: 2,
    name: "Sabnur",
    email: "sabnur@gmail.com",
    phone: "0171-23454526",
  },
  {
    id: 3,
    name: "Purnima",
    email: "purnima@gmail.com",
    phone: "0161-23265454",
  },
  {
    id: 4,
    name: "Apu Biswas",
    email: "apubiswas@gmail.com",
    phone: "0131-54236254",
  },
  {
    id: 5,
    name: "Srabonti",
    email: "srabonti@gmail.com",
    phone: "0181-23456856",
  },
];

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  console.log("hetting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  //use quary parametar
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
