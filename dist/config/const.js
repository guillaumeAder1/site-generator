export const URL = 'https://guillaumeader1.github.io/site-generator/dist/'

/**
 * helper to define how to build path for assest
 * depending of localhost/github
 * @param {String} path - part of url to concat or not e.g. ./images/pic.jpg 
 */
export function getRoot(path) {
    if (window.location.hostname !== 'localhost') {
        return `${URL}${path}`
    } else {
        return path
    }
}