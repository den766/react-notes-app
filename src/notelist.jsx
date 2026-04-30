import NoteCard from "./notecard";
function NoteList({ notes, onDeleteNote }) {
  return (
    <ul className="notes">
      {notes.map((note) => {
        return (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            author={note.author}
            desc={note.desc}
            onDeleteNote={onDeleteNote}
          />
        );
      })}
    </ul>
  );
}

export default NoteList;
