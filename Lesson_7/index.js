$(function() {
	let $draggable = $('.box'); 
	let $droppable = $('.bag'); 

	$draggable.draggable({ 
		containment: 'parent', 
		revert: true, 
		scope: 'gifts' 
	}); 

	$droppable.droppable({ 
		accept: '.box', 
		scope: 'gifts', 
		drop: function(e, ui) { 
			let $target = $(e.target); 
			if ($target.hasClass('bag')) { 
				ui.draggable.remove(); 
				let bagWidth = $target.width(); 
				let bagHeight = $target.height(); 
				let newBagWidth = bagWidth + 50; 
				let newBagHeight = bagHeight + 50; 
				$target.css({ 
					width: newBagWidth, 
					height: newBagHeight 
				}); 
			} 
		} 
	});
});