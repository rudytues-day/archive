export const sortByCreationDate = (a, b) => new Date(a) - new Date(b);
export const sortByUploadDate = (a, b) => new Date(b.data.uploadDate) - new Date(a.data.uploadDate);

// sort tags by frequency
// Tags.astro

// export function tagsByFrequency(collection) {

//     const allTags = collection.map((entry => 
//         entry.data.tags)).reduce((accumulator, value) => accumulator.concat(value), [])

//     let frequency = {}
//     allTags.forEach(tag => {
//         if (frequency[tag]) {
//             frequency[tag]++;}
//         else {frequency[tag] = 1}
//     })

//     function sortByFrequency(a, b) {
//         return frequency[a] - frequency[b];
//     }
// }

// const sortedTags = [... new Set(allTags.sort(sortByFrequency).toReversed().flat())];

