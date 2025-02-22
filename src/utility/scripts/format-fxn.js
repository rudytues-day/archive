// slugify

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

  // sort by similar

//   function sortBySimilar(entries) {
// 	const thisEntryTags = new Set(tags);
// 	const otherEntries = entries.filter((entry =>
// 		entry.slug !== slug));
// 	const otherEntryTags = otherEntries.map((entry) => {
// 		return new Set(entry.data.tags);
// 	});
// 	const similarTagCount = otherEntryTags.map((tagArray) => {
// 		return intersection(thisEntryTags, tagArray)});
// 	const slugsAndTags = otherEntries.map((entry, index) => {
// 		return { slug: entry.slug, tags: similarTagCount[index] };
// 	});
// 	const sortedSets = slugsAndTags.sort((a, b) => b.tags.size - a.tags.size);
// 	console.log(sortedSets)
// 	const similarEntries = sortedSets.map((set) => {
// 		const similar = otherEntries.find((entry) => entry.slug === set.slug);
// 		return similar;
// 	});
// 	return similarEntries;
// };

