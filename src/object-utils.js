/**
 * Find object property by string, e.g. 'prop1.prop2.prop3'
 * Return undefined if property not found
 */
export function findProperty(obj, property) {
    if (obj == null || property == null) {
        return;
    }
    var arr = property.split(".");
    while (arr.length && (obj = obj[arr.shift()])) {
    }
    return obj;
}

export default {
    findProperty
}