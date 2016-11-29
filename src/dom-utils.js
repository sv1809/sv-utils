export function isHtmlElement(el) {
    return el instanceof HTMLElement;
}

export function getHtmlElement(selector) {
    if (isHtmlElement(selector)) {
        return selector;
    }
    if (typeof selector === 'string') {
        return document.querySelector(selector);
    }
    return null;
}

export default {
    isHtmlElement,
    getHtmlElement
}