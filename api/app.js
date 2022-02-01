import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(cors());

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AMHHdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});