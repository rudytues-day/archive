export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
  }

  // export function sortByDate(entries) {
  //     return entries.toSorted((a, b) => new Date(a) - new Date(b))
  // }

export function sortByDate(entries) {
    const sortedEntries = [...entries];
    sortedEntries.sort((a, b) => new Date(a) - new Date(b));
    return sortedEntries;
}

