// const express = require('express');
// //const bodyParser = require('body-parser');
// const http = require('http');
// const socketIo = require('socket.io');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const morgan = require('morgan');
// const cors = require('cors');
// const multer = require('multer');
// // const swaggerUi = require('swagger-ui-express');
// // const swaggerDocument = require('./swagger.json');
// const { isAuthenticated, isAdmin } = require('./middlewares/auth');
// const createUserTable = require('./models/user');
// const mongoConnect = require('./configs/mongo');
// const authRoutes = require('./routes/authRoutes');
// const db_url  = process.env.MONGODB_URI;

// require('dotenv').config();


// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// app.use(express.static('public'));

// // Endpoint to handle image upload
// app.post('/upload', upload.single('image'), (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   res.json({ url: `/Backend/uploads/${file.filename}` });
// });


// // Database initialization
// (async () => {
//   try {
    
//     await createUserTable();
//     await mongoConnect( db_url );
//   } catch (error) {
//     console.error('Error initializing database:', error);
//     process.exit(1); 
//   }
// })();

// // app.use(bodyParser.json());
// app.use(express.json());
// // app.use(cookieParser());
// app.use(cors({origin:process.env.FRONTEND_URL}));
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
// }));

// app.use(morgan('dev'));

// io.on('connection', (socket) => {
//   console.log('New client connected');
  
//   socket.on('disconnect', () => {
//       console.log('Client disconnected');
//   });
  
//   socket.on('editor-change', (delta) => {
//       socket.broadcast.emit('editor-change', delta);
//   });
// });

// app.get('/',(req,res)=>{
//   try{
//     res.status(200).send("this is my home route")
//   }catch(err){

//   }
// })
// //app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use('/api/auth', authRoutes);
// //app.use('/api/orders', isAuthenticated, orderRoutes);
// server.listen(3000, () => console.log(`Listening on port 3000`));

// const PORT = process.env.PORT || 9090;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const { isAuthenticated, isAdmin } = require('./middlewares/auth');
const createUserTable = require('./models/user');
const mongoConnect = require('./configs/mongo');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const db_url = process.env.MONGODB_URI;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Middleware setup
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
}));
app.use(morgan('dev'));

// Socket.IO setup
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
  
  socket.on('editor-change', (delta) => {
    socket.broadcast.emit('editor-change', delta);
  });
});

// Endpoint for image upload
app.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }
  res.json({ url: `/Backend/uploads/${file.filename}` });
});

// Database initialization
(async () => {
  try {
    await createUserTable();
    await mongoConnect(db_url);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
})();

// Routes
app.get('/', (req, res) => {
  res.status(200).send("Welcome to the homepage");
});

app.use('/api/auth', authRoutes);

// Server start
const PORT = process.env.PORT || 9090;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
