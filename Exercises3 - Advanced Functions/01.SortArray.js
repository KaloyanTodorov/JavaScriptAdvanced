function sortArray(arr, sortMethod) {
    let ascComparator = (a, b) => a - b;
    let descComparator = (a, b) => b - a;

    let sortingStrategies = {
        asc: ascComparator,
        desc: descComparator
    }

    return arr.sort(sortingStrategies[sortMethod]);
}