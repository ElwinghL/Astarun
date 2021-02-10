/*
 
 .88b  d88.  .d88b.  d8b   db  d888b   .d88b.  d8888b. d8888b. 
 88"YbdP`88 .8P  Y8. 888o  88 88" Y8b .8P  Y8. 88  `8D 88  `8D 
 88  88  88 88    88 88V8o 88 88      88    88 88   88 88oooY" 
 88  88  88 88    88 88 V8o88 88  ooo 88    88 88   88 88~~~b. 
 88  88  88 `8b  d8" 88  V888 88. ~8~ `8b  d8" 88  .8D 88   8D 
 YP  YP  YP  `Y88P"  VP   V8P  Y888P   `Y88P"  Y8888D" Y8888P" 
                                                               
                                                               
 
*/
const dotenv = require("dotenv");
dotenv.config();

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGOLAB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, });
client.connect(err => {
    const astarunProject = client.db("NewAstarunProject");
    //Création des tabels qui n'existent pas :
    function checkSiLaTableExiste(nom) {
        console.log(astarunProject.listCollections({ name: nom }))
        return astarunProject.listCollections({ name: nom });
    }
    if (!checkSiLaTableExiste("Users")) {
        console.log("test");
        //astarunProject.createCollection("Users", {});
        //const Users = astarunProject.collection("Users");
        //Users.createIndex({ pseudo: 1 });
        //Users.createIndex({ pass: 1 });
        //Users.createIndex({ id: 1 }, { unique: true });
    }
    if (!checkSiLaTableExiste("Astarun")) {
        console.log("test2")
        //astarunProject.createCollection("Users", {});
        //const Users = astarunProject.collection("Users");
        //Users.createIndex({ pseudo: 1 });
        //Users.createIndex({ pass: 1 });
        //Users.createIndex({ id: 1 }, { unique: true });
    }
});
/*
 
 .d8888. d88888b d8888b. db    db d88888b db    db d8888b.      d88888b db    db d8888b. d8888b. d88888b .d8888. .d8888. 
 88"  YP 88"     88  `8D 88    88 88"     88    88 88  `8D      88"     `8b  d8" 88  `8D 88  `8D 88"     88"  YP 88"  YP 
 `8bo.   88ooooo 88oobY" Y8    8P 88ooooo 88    88 88oobY"      88ooooo  `8bd8"  88oodD" 88oobY" 88ooooo `8bo.   `8bo.   
   `Y8b. 88~~~~~ 88`8b   `8b  d8" 88~~~~~ 88    88 88`8b        88~~~~~  .dPYb.  88~~~   88`8b   88~~~~~   `Y8b.   `Y8b. 
 db   8D 88.     88 `88.  `8bd8"  88.     88b  d88 88 `88.      88.     .8P  Y8. 88      88 `88. 88.     db   8D db   8D 
 `8888Y" Y88888P 88   YD    YP    Y88888P ~Y8888P" 88   YD      Y88888P YP    YP 88      88   YD Y88888P `8888Y" `8888Y" 
                                                                                                                         
                                                                                                                         
 
*/
const express = require("express"); const path = require("path");
const app = express();
const router = express.Router();

//Gestion des ressources sxternes
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(__dirname + "/public/images"))
//Gestion de la favicon
var favicon = require("serve-favicon");
app.use(favicon(path.join(__dirname, "public", "images", "favicon.png")))
//Redirections du site
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
    //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/about.html"));
});

router.get("/sitemap", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/sitemap.html"));
});

app.use("/", router);

/*
 
 db       .d8b.  d8b   db  .o88b. d88888b .88b  d88. d88888b d8b   db d888888b      d8888b. db    db      .d8888. d88888b d8888b. db    db d88888b db    db d8888b. 
 88      d8' `8b 888o  88 d8P  Y8 88'     88'YbdP`88 88'     888o  88 `~~88~~'      88  `8D 88    88      88'  YP 88'     88  `8D 88    88 88'     88    88 88  `8D 
 88      88ooo88 88V8o 88 8P      88ooooo 88  88  88 88ooooo 88V8o 88    88         88   88 88    88      `8bo.   88ooooo 88oobY' Y8    8P 88ooooo 88    88 88oobY' 
 88      88~~~88 88 V8o88 8b      88~~~~~ 88  88  88 88~~~~~ 88 V8o88    88         88   88 88    88        `Y8b. 88~~~~~ 88`8b   `8b  d8' 88~~~~~ 88    88 88`8b   
 88booo. 88   88 88  V888 Y8b  d8 88.     88  88  88 88.     88  V888    88         88  .8D 88b  d88      db   8D 88.     88 `88.  `8bd8'  88.     88b  d88 88 `88. 
 Y88888P YP   YP VP   V8P  `Y88P' Y88888P YP  YP  YP Y88888P VP   V8P    YP         Y8888D' ~Y8888P'      `8888Y' Y88888P 88   YD    YP    Y88888P ~Y8888P' 88   YD 
                                                                                                                                                                    
                                                                                                                                                                    
 
*/

const serveur = app.listen(process.env.port || 3000);

console.log("Running at Port 3000");

/*
 
 .d8888.  .d88b.   .o88b. db   dD d88888b d888888b .d8888. 
 88"  YP .8P  Y8. d8P  Y8 88 ,8P" 88"     `~~88~~" 88"  YP 
 `8bo.   88    88 8P      88,8P   88ooooo    88    `8bo.   
   `Y8b. 88    88 8b      88`8b   88~~~~~    88      `Y8b. 
 db   8D `8b  d8" Y8b  d8 88 `88. 88.        88    db   8D 
 `8888Y"  `Y88P"   `Y88P" YP   YD Y88888P    YP    `8888Y" 
                                                           
                                                           
 
*/

const io = require("socket.io")(serveur);

io.on("connect", (socket) => {
    console.log("Un utilisateur s'est connecté");
    socket.on("disconnect", () => {
        console.log("L'utilisateur s'est déconnecté");
    });
})

//Inscription

io.on("inscription", (socket) => {

})