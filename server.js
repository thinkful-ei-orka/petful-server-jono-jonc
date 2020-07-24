const app = require('./modules/app/app');
const port = process.env.PORT || 9000;
// const catRoute = './routes/catRoute';
// const express = require('express');
// const cors = require('cors');
// const app = express();

// /* Middleware */
// app.use(express.json());
// app.use(cors());

// /* Routes */
// app.use('/api/cat', catRoute);

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${port}.`);
});
