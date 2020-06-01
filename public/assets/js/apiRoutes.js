var notesPage = [
    {
        noteTitle: "Grocery List",
        noteText: "Eggs, Bacon, Bread",
    },
    {
        noteTitle: "To Do List",
        noteText: "Exercise, Clean Apartment",
    },
    {
        noteTitle: "Calls",
        noteText: "Family & Friends",
    },
];

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
       return res.json(notesPage);
    });

    app.post("api/notes", function(req, res) {
        var newNote = req.body;
        notesPage.push(newNote);
        console.log(newNote);
        res.json(newNote);
    });

    app.delete("api/notes/:id", function(req, res) {
        
    })
}