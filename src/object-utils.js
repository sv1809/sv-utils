/**
 * Find object property by string, e.g. 'prop1.prop2.prop3'
 * Return undefined if property not found
 */

export function setValue(obj, property, newValue) {
    if (obj == null) {
        obj = {};
    }
    const ind = property.indexOf('.');
    const testArray = /^(.+)\[(\d+)\]$/;
    const current = ind !== -1 ? property.substring(0, ind) : property;
    const matches = testArray.exec(current);
    if (matches) {
        const arrInd = matches[2];
        const prop = matches[1];
        const res = obj[prop].map((curr, i) => {
            if (i == arrInd) {
                if (ind === -1) {
                    if (typeof curr === 'object') {
                        return Object.assign({}, curr, newValue);
                    } else {
                        return newValue;
                    }
                } else {
                    return setValue(curr, property.substring(ind + 1), newValue);
                }
            }
            return curr;
        });
        return Object.assign({}, obj, { [prop]: res });
    }
    if (ind === -1) {
        return Object.assign({}, obj, { [property]: newValue });
    }
    return Object.assign({}, obj, { [current]: setValue(obj[current], property.substring(ind + 1), newValue) });
}

export function getValue(obj, property) {
    if (obj == null) {
        return;
    }
    if (property == null) {
        return obj;
    }
    const ind = property.indexOf('.');
    const testArray = /^(.+)\[(\d+)\]$/;
    const current = ind !== -1 ? property.substring(0, ind) : property;
    const matches = testArray.exec(current);
    if (matches) {
        const arrInd = matches[2];
        const prop = matches[1];
        return getValue(obj[prop][arrInd], ind === -1 ? null : property.substring(ind + 1));
    }
    return getValue(obj[current], ind === -1 ? null : property.substring(ind + 1));
}

export default {
    getValue,
    setValue,
}