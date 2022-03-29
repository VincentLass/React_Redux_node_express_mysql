// On récupère la class Admin
const Admin = require("../models/Admin");

// Connexion de l'Admin
exports.loginAdmin = (req, res) => {

    let admin = new Admin(req.body.mail, req.body.password)

    Admin.login((results, error) => {
        // if(error){
        //     // console.log(error);
        //     res.send({error : error});
        // }
        if(results.length > 0) {
            req.session.admin = results;
            req.session.loggedIn = true;
            req.session.admin.mail = admin.mail;
            console.log(req.session.admin.mail,':test');
            res.send(results);
            // res.redirect('/attractions');
            // console.log(results);
        } else {
            res.send({ message : "Il y a une erreur dans le mail ou le password" });
            res.status(500).send(error);
            console.log("Pas d'admin avec ces identifiants");
        }
    }, admin);
};