import { API_URL } from "../_config";

export function getImageUrl(imageUrl) {
    return API_URL + imageUrl;
}

// NOTE need some fixes
export function arraySlicer(arr, parts) {
    const length = arr.length;

    const chunkSize = Math.floor(length / parts);
    const remainder = length % parts;
    const chunkSizes = Array(parts).fill(chunkSize);
    for (let i = 0; i < remainder; i++) {
        chunkSizes[i]++;
    }

    const result = [];
    let currentIndex = 0;
    for (let i = 0; i < chunkSizes.length; i++) {
        result.push(arr.slice(currentIndex, currentIndex + chunkSizes[i]));
        currentIndex += chunkSizes[i];
    }

    return result;
}