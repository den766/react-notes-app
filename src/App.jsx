import { useState } from "react";
import Header from "./header";
import AddNote from "./addnote";
import NoteList from "./notelist";
import SearchBar from "./searchbar";
import { validateNote } from "./utils/validation";

function App() {
  const [notes, setNote] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleSubmit(e, title, author, desc) {
    e.preventDefault();

    const validationError = validateNote(title, author, desc);

    if (validationError) {
      setError(validationError);
      return false;
    }

    const isDuplicate = notes.some(
      (note) => note.title === title && note.author === author,
    );

    if (isDuplicate) {
      setError("Duplicate entries , Try different keyword");
      return false;
    }

    const newNote = {
      id: Date.now(),
      title,
      author,
      desc,
      pinned: false,
    };

    setNote((prev) => [...prev, newNote]);
    setError("");
    console.log(notes);
    return true;
  }

  function deleteNote(id) {
    setNote((prev) => prev.filter((note) => note.id !== id));
  }

  function searchNote(search) {
    setSearchQuery(search);
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.desc.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedNotes = [...filteredNotes].sort((a, b) => b.pinned - a.pinned);

  function handleEditClick(id) {
    setEditingId(id);
    console.log(id);
  }

  function editNote(id, title, author, desc) {
    const validationError = validateNote(title, author, desc);
    if (validationError) {
      setError(validationError);
      return;
    }
    setNote((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, title, author, desc } : note,
      ),
    );

    setEditingId(null);
  }

  function handleCancelEdit() {
    setEditingId(null);
  }

  function pinNote(id) {
    setNote((prev) =>
      prev.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            pinned: !note.pinned,
          };
        } else {
          return note;
        }
      }),
    );

    console.log(notes);
  }

  return (
    <div className="container">
      <Header />
      <SearchBar searchQuery={searchQuery} onSearchNote={searchNote} />
      <AddNote onAddnote={handleSubmit} error={error} />
      <NoteList
        notes={sortedNotes}
        onDeleteNote={deleteNote}
        searchQuery={searchQuery}
        onEditNote={handleEditClick}
        editingId={editingId}
        editNote={editNote}
        onCancelNote={handleCancelEdit}
        onPinNote={pinNote}
      />
    </div>
  );
}

export default App;
