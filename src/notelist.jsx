import NoteCard from "./notecard";
function NoteList({ notes, onDeleteNote ,searchQuery , onEditNote , editingId, editNote , onCancelNote}) {

    if(notes.length === 0 && searchQuery){

         return <p className="error">No results Found</p>
         
    }

    if(notes.length ===0 ){

         return <p  className="error">No notes yet , Create one.</p>
    }
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
            onEditNote={onEditNote}
            editingId={editingId}
            EditNote={editNote}
            onCancelNote={onCancelNote}
          />
        );
      })}
    </ul>
  );
}

export default NoteList;
