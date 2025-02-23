const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')

// modules
const connectDB = require("./db/db.connect");
const routerPath = require('./routes/user.routes')


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// connection
connectDB();

// routes
app.use('/users', routerPath)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
