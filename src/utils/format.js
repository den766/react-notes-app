export function sanitize(txt) {
  return txt ? txt.trim() : "";
}

export function formatTitle(title) {
  const clean = sanitize(title);

  return clean.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

export function formatAuthor(author) {
  const clean = sanitize(author);

  return clean
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
