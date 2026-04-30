function SearchBar({ searchQuery, onSearchNote }) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search notes"
        value={searchQuery}
        onChange={(e) => {
          onSearchNote(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
