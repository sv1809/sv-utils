# sv-utils

Set of JavaScript utils

## Installation

```
npm install sv-utils --save
```
### Object utils

```js
import { objectUtils } from 'sv-utils';
```
```js
objectUtils.getValue(object, property)
```
`property` - string, path to property, eg 'prop1.prop2.prop3'

```js
objectUtils.setValue(object, property, value)
```
`property` - string, path to property, eg 'prop1.prop2.prop3'

### Array utils

```js
import { arrayUtils } from 'sv-utils';
```

```js
arrayUtils.getIndexByProperty(array, propertyValue, property)
```
If property null or undefined then return array.indexOf(propertyValue)
```js
getElementByProperty(arr, propertyValue, property)
```
