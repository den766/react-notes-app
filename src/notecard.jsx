function NoteCard({ title, author, desc }) {
  return (
    <>
      <li className="note">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{desc}</p>
      </li>
    </>
  );
}

export default NoteCard;
