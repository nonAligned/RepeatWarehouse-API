const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const itemsRoutes = require('./routes/api/items');
const marketingsRoutes = require('./routes/api/marketings');
const consumablesRoutes = require('./routes/api/consumables');
const otherExpensesRoutes = require('./routes/api/otherExpenses');
const buyersRoutes = require('./routes/api/buyers');

const app = express();
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('Connected to DB'))
// .catch(err => console.log(`Connection to DB failed: ${err}`));

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(`Connection to DB failed: ${error.message}`);
  }
}
run().catch(console.dir);

app.use('/api/items', itemsRoutes);
app.use('/api/marketings', marketingsRoutes);
app.use('/api/consumables', consumablesRoutes);
app.use('/api/other', otherExpensesRoutes);
app.use('/api/buyers', buyersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));