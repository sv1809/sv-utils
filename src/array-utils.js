export function getElementByProperty(arr, propertyValue, property) {
    const ind = getIndexByProperty(arr, propertyValue, property);
    if (ind == null || ind === -1) {
        return;
    } else {
        return arr[ind];
    }
}

export function getIndexByProperty(arr, propertyValue, property) {
    if (!Array.isArray(arr)) {
        return;
    }
    if (property == null) {
        return arr.indexOf(propertyValue);
    }
    for (let i = 0, l = arr.length; i < l; i++) {
        if (arr[i][property] === propertyValue) {
            return i;
        }
    }
    return -1;
}

export default {
    getElementByProperty,
    getIndexByProperty
};