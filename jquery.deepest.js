/**
 * Get the deepest children of each element in the set of matched elements, optionally filtered by a selector.
 */
(function ($) {
	$.fn.deepest = function (selector) {
		let deepestLevel = 0,
			$deepestChild,
			$deepestChildSet;
		
		this.each(function () {
			$parent = $(this);
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