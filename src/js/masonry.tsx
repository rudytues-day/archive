import React from "@astrojs/react";

export default function Masonry(props) {
    const { cards, columnCount } = props;
    const masonryColumns = generateCardColumns(cards, columnCount)

    return <ul className={styles.masonry}>{child}</ul>;
}

function generateCardColumns(cards, columnCount = 4) {
    const columns = [...Array(columnCount)].map(() => [])

    cards.forEach((card, i) => {
        const columnHeights = Array(columnCount).fill(0)
        const columnToAddCardTo = i % columnCount
        columns[columnToAddCardTo].push(card);
    })

    return columns
}