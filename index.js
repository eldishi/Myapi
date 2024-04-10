const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const port = 3000;

// Allow all cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -------------------------------------------- ENDPOINTS --------------------------------------------

/****************************************
 * Business
****************************************/

app.get('/players', async (req, res) => {
  try{
    
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.get('/boom', async (req, res) => {
  res.status(500).json({ message: "My bad" })
})

app.get('/players/salary', async (req, res) => {
  res.status(403).send({
    'error': 'Cannot access this information'
  })
})

app.get('/sopapa', async (req, res) => {
  try{
    res.send('Se cree que las sopapas artificiales han sido utilizadas por primera vez en el siglo III a. C., y estaban hechas de calabazas. Se utilizaban para succionar la «mala sangre» de los órganos internos a la superficie.');
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.get('/sopa', async (req, res) => {
  try{
    res.send('En caso de usar una sopapa, primero cerrá la llave del agua y ponete los guantes de goma. Quitá todas las cosas que estén alrededor o cerca del inodoro y cubrí el piso. Introducí la sopapa en el inodoro y presioná hacia abajo y luego hacia arriba repetidas veces.');
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.post('/cometa', (req, res) => {
  // Extract data from request body
  const requestData = req.body;

  // Perform any necessary operations with the received data
  // For this example, let's just echo back the received data
  res.json({ message: 'Received POST request', data: requestData });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
