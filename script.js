const symbolList = document.querySelector('.symbolsList');
const symbolRepParent = document.querySelector('.symbolRep');

function display(i){
	
	for(j = 0, len = symbolRepParent.children.length; j < len; j++){
		symbolRepParent.children[j].classList.add('none');
	}
		symbolRepParent.children[i].classList.remove('none');


}
for(i = 0, len = symbolList.children.length; i < len; i++){
	(function(index){
		symbolList.children[i].onclick = (function(){
			display(index);
		});
	})(i);
}