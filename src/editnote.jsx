// import { useState } from "react";
import useInput from "./hooks/useInput";
function EditForm({ id, title, author, desc, EditNote, onCancelNote }) {
  const editedTitle = useInput(title);
  const editedAuthor = useInput(author);
  const editedDesc = useInput(desc);
  return (
    <div className="editForm">
      <input
        type="text"
        placeholder="title"
        value={editedTitle.value}
        onChange={editedTitle.handleChange}
      />
      <input
        type="text"
        placeholder="author"
        value={editedAuthor.value}
        onChange={editedAuthor.handleChange}
      />
      <textarea
        value={editedDesc.value}
        onChange={editedDesc.handleChange}
      ></textarea>{" "}
      <button
        onClick={() => EditNote(id, editedTitle.value, editedAuthor.value, editedDesc.value)}
      >
        Save
      </button>
      <button onClick={() => onCancelNote()}>Cancel</button>
    </div>
  );
}
export default EditForm;
