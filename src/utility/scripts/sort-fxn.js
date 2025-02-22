export const sortByCreationDate = (a, b) => new Date(a) - new Date(b);
export const sortByUploadDate = (a, b) => new Date(b.data.uploadDate) - new Date(a.data.uploadDate);

export function tagsByFrequency(collection) {
	const allEntryTags = collection.map((entry => 
		entry.data.tags)).reduce((accumulator, value) => 
		accumulator.concat(value), [])
	let frequency = {}
	allEntryTags.forEach(tag => {
		if (frequency[tag]) {
			frequency[tag]++;}
		else {frequency[tag] = 1}
	})
	function sortByFrequency(a, b) {
		return frequency[a] - frequency[b];			
	}
	const sortedTags = [... new Set(allEntryTags.sort(sortByFrequency).toReversed().flat())];
	return sortedTags;
};
