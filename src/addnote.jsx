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
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
        </div>

        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
}

export default AddNote;
