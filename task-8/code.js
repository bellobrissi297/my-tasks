function pickPeaks(arr) {
    let pos = [];
    let peaks = [];
    let possiblePeak = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            possiblePeak = i;
        } else if (arr[i] < arr[i - 1] && possiblePeak !== null) {
            pos.push(possiblePeak);
            peaks.push(arr[possiblePeak]);
            possiblePeak = null;
        }
    }

    return { pos, peaks };
}
