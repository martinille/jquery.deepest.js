# jquery.deepest.js

A plugin that allows developers to access the deepest children of a DOM element, and is less than 1kb in size.

Retrieve the children at the deepest level of the DOM tree for each element in the set of matched elements, with the option to filter these children using a selector.

---

### Install with npm

```shell
npm i jquery.deepest.js
```

---

### Usage

HTML content:
```html
<div id="test1">
    <div class="level1">
        <div class="level2">
            <div class="level3"></div>
        </div>
    </div>
</div>

<div id="test2">
    <ul>
        <li><a href="#">link1</a></li>
        <li><a href="#">link2<span></span></a></li>
        <li><a href="#">link3</a></li>
    </ul>
</div>
```

JavaScript:

```javascript
let $deepest1 = $("#test1").deepest();
console.log($deepest1); // returns JQuery element '<div class="level3"></div>'

let $deepest2 = $("#test2").deepest('span');
console.log($deepest2); // returns JQuery element '<span></span>'
```
