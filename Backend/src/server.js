const express = require('express');
//const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');
const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const { isAuthenticated, isAdmin } = require('./middlewares/auth');
const createUserTable = require('./models/user');
const mongoConnect = require('./configs/mongo');
const authRoutes = require('./routes/authRoutes');
const db_url  = process.env.MONGODB_URI;

require('dotenv').config();


const app = express();

// Database initialization
(async () => {
  try {
    
    await createUserTable();
    await mongoConnect( db_url );
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1); 
  }
})();

// app.use(bodyParser.json());
app.use(express.json());
// app.use(cookieParser());
app.use(cors({origin:process.env.FRONTEND_URL}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
}));

app.use(morgan('dev'));

app.get('/',(req,res)=>{
  try{
    res.status(200).send("this is my home route")
  }catch(err){

  }
})
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRoutes);
//app.use('/api/orders', isAuthenticated, orderRoutes);

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
