const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            res.json(JSON.parse(data));
            //res.json ends in the background
            // res.send(data);
        });
    });

    app.post("/api/notes", function(req, res) {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            //adds another key to the existing body
            req.body.id = uuidv4();

            var notes = JSON.parse(data);
            notes.push(req.body);
            fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
                res.json(req.body);
            });
        });

        // var newNote = req.body;
        // notesPage.push(newNote);
        // console.log(newNote);
        // res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res) {
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            var notes = JSON.parse(data);
            var newArray = notes.filter(note => note.id !== req.params.id);

            fs.writeFile("./db/db.json", JSON.stringify(newArray), (err) => {
                if (err) {
                    res.status(500).end();
                }
                else {
                    res.status(200).end();
                }
            });
        });       
    });
}

//utf-8 code that is used to translate the letters into zeros/ones (encryption)
//filter creates a new array based on a condition