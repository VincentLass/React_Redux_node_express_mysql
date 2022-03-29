// import de express
const express = require('express');
// import des controllers
const attraction = require('../controllers/attractions');
const reservation = require('../controllers/reservations');
const connexion = require('../controllers/connexion');
// const admin = require('../controllers/admin');
// import de express router
const router = express.Router();

// route vers la page d'accueil
// router.get('/', (req,res) => {
//     res.render ('pages/index');
// });
// router.get('/', (req,res) => {
//         res.render ('pages/Attractions');
//     });

// route vers la page attraction
router.get('/attractions', attraction.getAllAttractions);
// route vers la page reservation
// router.get('/reservation', (req,res) => {
//     res.render ('pages/reservation');
// });
// route permettant d'envoyer la réservation
router.post('/reservations', reservation.addReservation);


// route vers la page connexion
// router.get('/connexion', (req,res) => {
//     // if(req.session.admin){
//     //     res.send ({loggedIn : true, admin: req.session.admin});
//     //     console.log(admin);
//     // } else {
//     //     res.send ({loggedIn : false});
//     // }
//     res.send('recu')
//     console.log(results);
    
// });

router.get('/connexion', (req,res) => {
    res.json({message:'page admin'});
});

// route vers la page connexion REACT REDUX
router.post('/connexion', connexion.loginAdmin);

// router.post('/connexion', admin.login);

// route permettant la deconnexion
// router.get('/connexion', (req, res) => {
//     req.session.destroy();
//     res.redirect('/');
// });

// const db= require('../database');

// router.post('/connexion', function(req, res) {
//     let mail = req.body.mail;
//     let password = req.body.password;
//     // let id = request.body.id;
//     console.log(mail);
//     console.log(password);
//     if (mail && password) {
        
//         db.query('SELECT * FROM admin WHERE mail = ? AND password = ?', [mail, password], function(error, results, fields) {
//             if (results.length > 0) {
//                 req.session.loggedin = true;
//                 req.session.mail = mail;
//                 id_admin = results[0].id;
//                 // console.log(results[0].id);
//                 // console.log(id_admin);
//                 // res.render('./admin/admin' , { admin : results });
//                 res.redirect('./admin/edit-attraction');
//             } else {
//                 console.log(error);
//                 // res.render('/admin/edit-attraction', {message : `Identifiant ou mot de passe incorrect` });
//                 // alert('`Identifiant ou mot de passe incorrect`');
//                 res.send(`Identifiant ou mot de passe incorrect`);
//             }            
//             res.end();
//         });
//     } else {
//         res.send("Merci d'entrer vos données de connexion");
//         res.end();
//     }
// });

module.exports = router;

