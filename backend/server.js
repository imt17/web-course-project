const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
const newYorkData = [
  { 
    id: 1, 
    name: 'Statue of Liberty', 
    location: 'Liberty Island', 
    established: 1886, 
    description: 'An iconic symbol of freedom and democracy, gifted by France to the United States.' 
  },
  { 
    id: 2, 
    name: 'Central Park', 
    location: 'Manhattan', 
    established: 1857, 
    description: 'A large public park in New York City, offering various recreational activities and natural beauty.' 
  },
  { 
    id: 3, 
    name: 'Empire State Building', 
    location: '350 5th Ave, New York, NY 10118', 
    established: 1931, 
    description: 'A historic skyscraper and an iconic symbol of New York City, known for its Art Deco design and observation deck.' 
  },
  { 
    id: 4, 
    name: 'Times Square', 
    location: 'Manhattan', 
    established: 1904, 
    description: 'A bustling commercial and entertainment hub known for its bright lights, Broadway theaters, and New Year’s Eve celebrations.' 
  },
  { 
    id: 5, 
    name: 'Brooklyn Bridge', 
    location: 'Connects Manhattan and Brooklyn', 
    established: 1883, 
    description: 'A historic suspension bridge that offers stunning views of the New York City skyline and East River.' 
  }
];


app.get('/new-york-data', (req, res) => {
  res.json(newYorkData);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
