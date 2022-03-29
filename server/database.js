const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost', // Mettre l'hote de notre site
    user: 'root',      // Mettre l'identifiant d'accès à notre BDD
    password: '',      // Mettre le mot de passe de notre BDD
    database: 'horror_parc' // Mettre le nom de notre BDD
});
db.connect(function(err) {
    if (err) throw err;
    console.log('Connecté à la database avec succès!!!');
});

module.exports = db;