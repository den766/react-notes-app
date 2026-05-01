import EditForm from "./editnote";

function NoteCard({
  id,
  title,
  author,
  desc,
  onDeleteNote,
  onEditNote,
  editingId,
  EditNote,
  onCancelNote,
}) {
  if (editingId === id) {
    return (
      <EditForm
        id={id}
        title={title}
        author={author}
        desc={desc}
        EditNote={EditNote}
        onCancelNote={onCancelNote}
      />
    );
  }
  return (
    <li className="note">
      <div className="note-title">{title}</div>
      <div className="note-author">{author}</div>
      <p>{desc}</p>
      <button onClick={() => onDeleteNote(id)}>Delete</button>
      <button onClick={() => onEditNote(id)}>Edit</button>
    </li>
  );
}

export default NoteCard;
