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

  export function formatDateYear(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: "numeric",
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

export function sortBySimilar(entries) {
  // get entries with current entry filtered out
  // get tag array of current entry
  // loop through entry tag arrays
  // filter entries with some() or includes() at least one tag
  // create counter function to count similar tags
  // run entries through counter function
  // if counter >= 3
  // add to new array of similar entries
  // return similar entries randomized
}

