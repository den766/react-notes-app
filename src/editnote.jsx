import { useState } from "react";
function EditForm({ id, title, author, desc, EditNote  , onCancelNote}) {
  const [editedTitle, setEditTitle] = useState(title);
  const [editedAuthor, setEditedAuthor] = useState(author);
  const [editedDesc, setEditedDesc] = useState(desc);
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={editedTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="author"
        value={editedAuthor}
        onChange={(e) => setEditedAuthor(e.target.value)}
      />
      <textarea
        value={editedDesc}
        onChange={(e) => setEditedDesc(e.target.value)}
      ></textarea>{" "}
      <button onClick={() => EditNote(id, editedTitle, editedAuthor, editedDesc)}>
        Save
      </button>
      <button onClick={()=> onCancelNote()}>Cancel</button>
    </div>
  );
}
export default EditForm;
