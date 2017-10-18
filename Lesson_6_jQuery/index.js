$(document).ready( function() {
	
    $("#draggable").draggable({revert:true});
    $("#droppable").droppable({drop: function(){
		$(this).effect("highlight", {color: 'blue'}, 3000);
      }
    });
  } );