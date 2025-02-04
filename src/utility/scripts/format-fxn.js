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

export function tabToggles() {
  const toggles = document.querySelectorAll<HTMLElement>(`[data-toggle-section]`);
  const sections = document.querySelectorAll<HTMLElement>(`[data-pane-section]`);
  const sectionIds = Array.from(sections).map((section) => {
    return section.dataset.paneSection;
  });

  const hash = document.location.hash.replace("#", "");

  function activateSection(sectionId) {
    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.dataset.paneSection === sectionId) {
        section.classList.add("active");
      }
    });
    toggles.forEach((toggle) => {
      toggle.classList.remove("active");
      if (toggle.dataset.toggleSection === sectionId) {
        toggle.classList.add("active");
      }
    });
  };

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const sectionId = toggle.dataset.toggleSection;
      activateSection(sectionId);
      const current = new URL(window.location.href);
      current.hash = sectionId;
      location.replace(current);
    });
  });

  if (sectionIds.includes(hash)) {
    activateSection(hash);
  }
}
