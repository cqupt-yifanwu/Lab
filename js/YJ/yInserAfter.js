define(function(){
	var insertAfter=function insertAfter(newElement,targetElement){
		var parent=targetElement.parentNode;
		if(parent.lastchild==targetElement){
			parent.appendChild(newElement);
		}else{
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
		return insertAfter;
	}
});
