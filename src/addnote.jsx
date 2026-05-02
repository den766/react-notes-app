import { useState } from "react";

function AddNote({ onAddnote, error }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          const success = onAddnote(e, title, author, desc);

          if (success) {
            setTitle("");
            setAuthor("");
            setDesc("");
          }
        }}
      >
        <div className="controls">
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            placeholder="write note..."
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button type="submit">Add Note</button>
        </div>
      </form>
    </>
  );
}

export default AddNote;
