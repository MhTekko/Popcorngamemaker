const nav=document.getElementsByTagName("nav")[0]
const topoNav=nav.offsetTop;

function fixarMenu(){
	if(window.page >= topoNav)^{
	nav.classList.add("FixoNoTopo");
	}else{
		nav.classlist.remove("FixoNoTopo")
		
	}
}