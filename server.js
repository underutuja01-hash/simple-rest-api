const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Sample notes data
let notes = [
    {
        id: 1,
        title: "First Note",
        content: "This is my first note"
    },
    {
        id: 2,
        title: "Second Note",
        content: "This is my second note"
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("Simple Notes REST API is running!");
});

// GET all notes
app.get("/notes", (req, res) => {
    res.status(200).json(notes);
});

// GET single note by ID
app.get("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const note = notes.find(note => note.id === id);

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.status(200).json(note);
});

// POST - Add a new note
app.post("/notes", (req, res) => {
    const { title, content } = req.body;

    const newNote = {
        id: notes.length + 1,
        title,
        content
    };

    notes.push(newNote);

    res.status(201).json({
        message: "Note added successfully",
        note: newNote
    });
});

// PUT - Update a note
app.put("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const note = notes.find(note => note.id === id);

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    const { title, content } = req.body;

    note.title = title || note.title;
    note.content = content || note.content;

    res.status(200).json({
        message: "Note updated successfully",
        note
    });
});

// DELETE - Delete a note
app.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    notes.splice(noteIndex, 1);

    res.status(200).json({
        message: "Note deleted successfully"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});