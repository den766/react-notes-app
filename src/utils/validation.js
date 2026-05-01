export function validateNote(title, author, desc) {
  if (!title || title.trim().length < 3) {
    return "Title must be at least 3 characters";
  }

  if (!author || author.trim().length < 3) {
    return "Author must be at least 3 characters";
  }

  if (!desc || desc.trim().length < 6) {
    return "Description must be at least 6 characters";
  }

  return null;
}