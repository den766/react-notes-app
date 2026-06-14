import { useParams } from "react-router-dom";

function NoteDetail({ notes }) {
  const id = useParams();

  const note = notes.find((room) => room.id === Number(id));

  return <h1>Notes :{note.id}</h1>;
}

export default NoteDetail;
