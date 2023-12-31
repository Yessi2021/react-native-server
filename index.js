const express = require('express');
const cors = require("cors")
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');

const User = require('./models/user');

const app = express();

app.use( cors());

// app.use((req, res, next) => {
//   req.on('data', chunk => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });

app.use(express.json());
app.use(userRouter);

// const test = async (email, password) => {
//   const user = await User.findOne({ email: email });
//   const result = await user.comparePassword(password);
//   console.log(result);
// };

// test('niraj@email.com', 'niraj12');

app.get('/test', (req, res) => {
  res.send('Hello world');
});

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});

app.listen( process.env.PORT || 8000, () => {
  console.log(`server running on ${process.env.PORT}`);
});
