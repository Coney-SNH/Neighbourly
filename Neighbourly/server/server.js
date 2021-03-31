const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/project.routes')(app);
// require('./routes/project.routes')(app);
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.listen(8000, () => console.log("Now listening on port 8000"));