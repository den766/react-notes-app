import { useState } from "react";
import AddNote from "./addnote";
import NoteList from "./notelist";

function App() {
  const [notes, setNote] = useState([]);
  const [error, setError] = useState("");

  function handleSubmit(e, title, author, desc) {
    e.preventDefault();
    if (title.trim().length < 3 || !title) {
      setError("Title cannot be empty or less than 3 characters");
      return false;
    }

    if (author.trim().length < 3 || !author) {
      setError("Author cannot be empty or less than 3 charactres");
      return false;
    }

    if (desc.trim().length < 6 || !desc) {
      setError("Description cannot be empty or less than 6 characters ");
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
    };

    setNote(prev => [...prev, newNote]);
    setError("");
    console.log(notes);
    return true;
  }

  return (
    <div className="container">
    <AddNote onAddnote={handleSubmit} error={error} />
    <NoteList notes={notes}/>
   </div>
  ) 
}

export default App;
