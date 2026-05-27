import useInput from "./hooks/useInput";

function AddNote({ onAddnote, error }) {
  const title = useInput();
  const author = useInput();
  const desc = useInput();

  return (
    <>
      <form
        onSubmit={(e) => {
          const success = onAddnote(e, title.value, author.value, desc.value);



          if (success) {
            title.reset();
            author.reset();
            desc.reset();
          }
        }}
      >
        <div className="controls">
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Note title"
            value={title.value}
            onChange={title.handleChange}
          />
          <input
            type="text"
            placeholder="Author name"
            value={author.value}
            onChange={author.handleChange}
          />
          <textarea
            placeholder="write note..."
            rows={4}
            value={desc.value}
            onChange={desc.handleChange}
          ></textarea>
          <button type="submit">Add Note</button>
        </div>
      </form>
    </>
  );
}

export default AddNote;
