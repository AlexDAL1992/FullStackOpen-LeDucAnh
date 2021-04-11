const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :message"
  )
);
morgan.token("message", (req, res) => {
  return JSON.stringify(req.body);
});

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
  {
    name: "Alex Lightman",
    number: "045-1186092",
    id: 5,
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) res.json(person);
  else res.status(404).end();
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const person = req.body;

  if (!("name" in person && "number" in person)) {
    return res.status(400).json({ error: "name or number properties missing" });
  }

  if (persons.find(({ name }) => name === person.name)) {
    return res.status(400).json({ error: "name must be unique" });
  }

  const id = Math.floor(Math.random() * 100000);
  const personFinalized = { ...person, id: id };
  persons.concat(personFinalized);
  res.json(personFinalized);
});

app.get("/info", (req, res) => {
  res.send(
    `Phonebook has info for ${persons.length} people<br/><br/>${new Date()}`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});