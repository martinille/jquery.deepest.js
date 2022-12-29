# jquery.deepest.js
Get the deepest children of each element in the set of matched elements, optionally filtered by a selector.

---

### Usage

HTML content:

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

JavaScript:

    <script>
        let $deepest1 = $("#test1").deepest();
        console.log($deepest1); // returns JQuery element '<div class="level3"></div>'

        let $deepest2 = $("#test2").deepest('span');
        console.log($deepest2); // returns JQuery element '<span></span>'
    </script>