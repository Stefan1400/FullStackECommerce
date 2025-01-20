const express = require('express');
const app = express();
const port = 5000; // Or any port you'd prefer
const db = require('./db.js');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json()); // This is to parse incoming JSON requests
app.use(bodyParser.json());
// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/users/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const query = 'SELECT * FROM users WHERE id = $1 RETURNING *';
      const result = await db.query(query, [id]);
      const retrievedUser = result.rows[0];

      if (!retrievedUser) {
         return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(retrievedUser);

   } catch(err) {
      console.error('Error retrieving user', err);
      return res.status(500).json({ error: 'Failed to retrieve user' });
   }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
