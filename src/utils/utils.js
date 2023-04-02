import { API_URL, IMAGES_AMOUNT } from "../_config";

export function getImageUrl(imageUrl) {
    return API_URL + imageUrl;
}

export function getArrayOfNumber(total) {
    const lastPage = Math.ceil(total / IMAGES_AMOUNT);
    if (lastPage <= 1) return [1];
    return Array(lastPage).fill(0).map((e, index) => index + 1);
}

// NOTE need some fixes (unused)
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