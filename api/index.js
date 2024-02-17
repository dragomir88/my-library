const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// This will store our books in memory,
// "id" is the unique identifier,
// other fields are up to you
let books = [
  { 
    id: 1, 
    title: "Manufacturing Consent: The Political Economy of the Mass Media", 
    author: "Noam Chomsky", 
    genre: "Non-Fiction",
    description: "Explores how the mass media serves as a propaganda system that cooperates with the state and corporate interests."
  },
  { 
    id: 2, 
    title: "Hegemony or Survival: America's Quest for Global Dominance", 
    author: "Noam Chomsky", 
    genre: "Non-Fiction",
    description: "Analyzes the policies and actions of the U.S. in the context of its global dominance and the potential consequences."
  },
  { 
    id: 3, 
    title: "Understanding Power: The Indispensable Chomsky", 
    author: "Noam Chomsky", 
    genre: "Non-Fiction",
    description: "A wide-ranging collection of discussions covering the politics of power and the workings of institutions in shaping discourse."
  },
  { 
    id: 4, 
    title: "The Sublime Object of Ideology", 
    author: "Slavoj Žižek", 
    genre: "Philosophy",
    description: "Žižek's first major work in English, examining the mechanisms and structures that shape ideology."
  },
  { 
    id: 5, 
    title: "Living in the End Times", 
    author: "Slavoj Žižek", 
    genre: "Philosophy",
    description: "A critical examination of contemporary society, culture, and politics through the lens of psychoanalysis and philosophy."
  },
  { 
    id: 6, 
    title: "The Parallax View", 
    author: "Slavoj Žižek", 
    genre: "Philosophy",
    description: "Explores the concept of 'parallax,' the apparent displacement of an object caused by a change in observational position."
  },
  { 
    id: 7, 
    title: "Shogun", 
    author: "James Clavell", 
    genre: "Historical Fiction",
    description: "Set in the early 17th century, this novel tells the story of an English navigator who becomes a samurai in Japan."
  },
  { 
    id: 8, 
    title: "Tai-Pan", 
    author: "James Clavell", 
    genre: "Historical Fiction",
    description: "A tale of power, struggle, and the founding of Hong Kong after the Opium Wars in the 19th century."
  },
  { 
    id: 9, 
    title: "King Rat", 
    author: "James Clavell", 
    genre: "Historical Fiction",
    description: "Set in a Japanese POW camp during World War II, this novel explores the survival strategies of a group of prisoners with a focus on an American corporal known as the King Rat."
  }
];

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Add a new book
app.post("/books", (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

// Update a book
app.put("/books/:id", (req, res) => {
  const index = books.findIndex((book) => book.id === parseInt(req.params.id));
  if (index >= 0) {
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});