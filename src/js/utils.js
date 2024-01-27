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

  // format dates

  export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
  }

  // sort functions

export function sortEntries(entries) {
    const allEntries = [...entries];
    allEntries.sort(sortFunction);
    return allEntries;
}

export const sortByCreationDate = (a, b) => new Date(a) - new Date(b);
export const sortByUploadDate = (a, b) => new Date(a.data.uploadDate).getTime() - new Date(b.data.uploadDate).getTime();

