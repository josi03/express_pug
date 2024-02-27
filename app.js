var express = require('express');
const persons = [
    {id: 1, nome: 'mario', eta: 14, image: '1.webp'},
    {id: 2, nome: 'carla', eta: 20, image: '2.jpg'},
    {id: 3, nome: 'luca', eta: 25, image: '3.avif'}];
var app = express();

app.set('view engine', 'pug'); //Dico a express di usare pug come motore di template
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
    res.render('../index', {
        title: "Homepage",
        persons
    }); //Dico a express di processare e inviare la pagina index.pug
});
app.get('/profile', (req, res) => {
    const person = persons[req.query.id-1];
    res.render('../profile', {
        title: `About ${person.nome}`,
        person
    });
});   

app.listen(3000, function () {});