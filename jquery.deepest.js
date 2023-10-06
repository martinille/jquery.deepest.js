/**
 * Find the deepest child element within each element in the set of matched elements.
 *
 * @param {string} selector - Optional. A selector expression to filter the deepest child elements.
 * @return {object} Returns a jQuery object containing the deepest child elements.
 */
(function ($) {
	$.fn.deepest = function (selector) {
		let deepestLevel = 0,
			$deepestChild,
			$deepestChildSet;
		
		this.each(function () {
			let $parent = $(this);
			$parent
				.find((selector || '*'))
				.each(function () {
					if (!this.firstChild || this.firstChild.nodeType !== 1) {
						let levelsToParent = $(this).parentsUntil($parent).length;
						if (levelsToParent > deepestLevel) {
							deepestLevel = levelsToParent;
							$deepestChild = $(this);
						} else if (levelsToParent === deepestLevel) {
							$deepestChild = !$deepestChild ? $(this) : $deepestChild.add(this);
						}
					}
				});
			$deepestChildSet = !$deepestChildSet ? $deepestChild : $deepestChildSet.add($deepestChild)
		});
		
		return this.pushStack($deepestChildSet || [], 'deepest', selector || '');
	};
}(jQuery));