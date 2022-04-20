const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express(); 
// const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');

// let ejs = require('ejs');

// gestion de la connexion
// let session = require('express-session');

// import du port où sera lancée l'app
const port = 3000;

const adminRoutes = require('./routes/admin');
const parcRoutes = require('./routes/parc');

app.use(cors({
    origin:'http://localhost:3001',
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    key:"adminID",
    secret:"login",
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24,
    }
}));

// l'affichage se fera avec ejs
// app.set('views','./views');
// app.set('views','./client/src/pages');
// moteur de template
// app.set('view engine', 'ejs');

app.use( express.static( "public" ) );

// app.use( express.static(path.join(__dirname,'public')));

// On va utiliser body parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use('/', parcRoutes);



// Pour lancer l'application on utilise ce code : 
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })