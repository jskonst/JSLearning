window.onload = function() {
	let dragged; 
	let boxes = document.querySelectorAll('.box'); 
	let bag = document.querySelector('.bag'); 

	function dragStart(e) { 
		dragged = e.target; 
	} 

	function dragOver(e) { 
		e.preventDefault(); 
	} 

	function drop(e) { 
		if (e.target.className === 'bag') { 
			let bagStyle = getComputedStyle(bag); 
			let bagWidth = parseInt(bagStyle.width); 
			let bagHeight = parseInt(bagStyle.height); 
			this.style.width = bagWidth + 30 + 'px'; 
			this.style.height = bagHeight + 30 + 'px'; 
			dragged.parentNode.removeChild(dragged); 
		} 
	} 

	bag.addEventListener('drop', drop); 
	bag.addEventListener('dragover', dragOver); 
	boxes.forEach(box => { 
		box.addEventListener('dragstart', dragStart); 
	});
}