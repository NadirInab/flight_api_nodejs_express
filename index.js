const express = require('express');
const app = express();

// In-memory array of flights data
let flights = [
  { id: 1, date: '2023-04-01', from: 'New York', to: 'London', airport: 'JFK' },
  { id: 2, date: '2023-04-02', from: 'London', to: 'New York', airport: 'LHR' },
  { id: 3, date: '2023-04-03', from: 'San Francisco', to: 'Tokyo', airport: 'SFO' },
  { id: 4, date: '2023-04-04', from: 'Tokyo', to: 'San Francisco', airport: 'NRT' },
  { id: 5, date: '2023-04-05', from: 'Paris', to: 'Rome', airport: 'CDG' },
  { id: 6, date: '2023-04-06', from: 'Rome', to: 'Paris', airport: 'FCO' },
];

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

// Route to add a new flight
app.post('/flights', (req, res) => {
  const { date, from, to, airport } = req.body;
  const newFlight = { id: flights.length + 1, date, from, to, airport };
  flights.push(newFlight);
  res.json(newFlight);
});

app.listen(3000, () => {
  console.log('Flights API listening on port 3000');
});
