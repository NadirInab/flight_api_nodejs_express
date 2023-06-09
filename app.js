const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

//  Flights data
let flights = [
  {
    id: 1,
    date: '2023-04-01',
    from: 'New York',
    to: 'London',
    airport: 'JFK',
    airline: 'Delta',
    aircraft: 'Boeing 747',
    timezone: 'UTC-4',
    latitude: 40.6413,
    longitude: -73.7781,
    flight_status: 'On time',
    price: 1000,
    seats: 200,
  },
  {
    id: 2,
    date: '2023-04-02',
    from: 'London',
    to: 'New York',
    airport: 'LHR',
    airline: 'British Airways',
    aircraft: 'Boeing 787',
    timezone: 'UTC',
    latitude: 51.4694,
    longitude: -0.4503,
    flight_status: 'On time',
    price: 900,
    seats: 180
  },
  {
    id: 3,
    date: '2023-04-03',
    from: 'San Francisco',
    to: 'Tokyo',
    airport: 'SFO',
    airline: 'United Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 1500,
    seats: 250
  },
  {
    id: 4,
    date: '2023-04-04',
    from: 'Wasignton DC',
    to: 'Rabat',
    airport: 'M6',
    airline: 'Morroccan Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 1500,
    seats: 250
  },
  {
    id: 5,
    date: '2023-04-05',
    from: 'Algerie',
    to: 'Riad',
    airport: 'SFO',
    airline: 'Saudi Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 1500,
    seats: 250
  },
  {
    id: 6,
    date: '2023-04-06',
    from: 'Ankara',
    to: 'Madrid',
    airport: 'SFO',
    airline: 'Turksh Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 1500,
    seats: 250
  },
  {
    id: 7,
    date: '2023-04-07',
    from: 'Cairo',
    to: 'Marrakech',
    airport: 'SFO',
    airline: 'Egyptian Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 1500,
    seats: 250
  },
  {
    id: 8,
    date: '2023-04-08',
    from: 'San Francisco',
    to: 'Tokyo',
    airport: 'SFO',
    airline: 'United Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 1500,
    seats: 160
  },
  {
    id: 9,
    date: '2023-04-09',
    from: 'San Francisco',
    to: 'Roma',
    airport: 'SFO',
    airline: 'Italy Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 800,
    seats: 100
  },
  {
    id: 10,
    date: '2023-04-10',
    from: 'Agadir',
    to: 'Tanger',
    airport: 'SFO',
    airline: 'Arabic Airlines',
    aircraft: 'Airbus A350',
    timezone: 'UTC-7',
    latitude: 37.7749,
    longitude: -122.4194,
    flight_status: 'Delayed',
    price: 1500,
    seats: 250
  },
];

// Popular destinations : 
let popular_destinatons = [
  {
    id: 1,
    city: 'Roma',
    image: 'https:\\test.com',
    price: 1200
  },
  {
    id: 2,
    city: 'Japan',
    image: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_1280.jpg',
    price: 1200
  },
  {
    id: 4,
    city: 'Paris',
    image: 'https:\\test.com',
    price: 1200
  },
  {
    id: 5,
    city: 'New York',
    image: 'https:\\test.com',
    price: 1200
  },
  {
    id: 6,
    city: 'Madrid',
    image: 'https:\\test.com',
    price: 1200
  },
  {
    id: 7,
    city: 'Istanbul',
    image: 'https:\\test.com',
    price: 1000
  },
]

// cheapest destinations : 

let cheapest = [
  {
    id : 1, 
    city : 'Rabat', 
    image : 'http://test.com', 
    price : 90
  },
  {
    id : 2, 
    city : 'Cairo', 
    image : 'http://test.com', 
    price : 80
  },
  {
    id : 1, 
    city : 'Jakarta', 
    image : 'http://Jakarta.com', 
    price : 70
  }
]

// Route to get all flights
app.get('/flights', (req, res) => {
  res.json(flights);
});

// Route to get flights by date
app.get('/flights/date/:date', (req, res) => {
  const { date } = req.params;
  const filteredFlights = flights.filter(flight => flight.date === date);
  res.json(filteredFlights);
});

// Route to get flights by origin and destination
app.get('/flights/:from/:to', (req, res) => {
  const { from, to } = req.params;
  const filteredFlights = flights.filter(flight => flight.from === from && flight.to === to);
  res.json(filteredFlights);
});

app.get('/flights/price/:price', (req, res) => {
  const { price } = req.params;
  const filtredFlight = flights.filter(flight => flight.price === price);
  res.json(filtredFlight);
});

// Route to add a new flight
app.post('/flights', (req, res) => {
  const newFlight = {
    id: flights.length + 1,
    ...req.body
  };
  flights.push(newFlight);
  res.json(newFlight);
});

// Route to get all popular destinations : 
app.get('/popular', (req, res) => {
  res.json(popular_destinatons) ;
})

// Route to add a new popular destination :
app.post('/popular', (req, res)=>{
  const newPopular = {
    id: popular_destinatons.length + 1, 
    ...req.body
  } ;
  popular_destinatons.push(newPopular) ;
  res.json(newPopular) ;
})

app.listen(port, () => {
  console.log("Happy coding !!");
});
