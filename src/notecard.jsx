function NoteCard({ id, title, author, desc, onDeleteNote }) {
  return (
    
      <li className="note">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{desc}</p>
        <button onClick={() => onDeleteNote(id)}>Delete</button>
      </li>
    
  );
}

export default NoteCard;
