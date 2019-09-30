const jaja = function() {
	console.log("jaja I got ya!");
};

const setDisplayEvent = function() {
	const i3Section = document.getElementById("i3");
	const rangerSection = document.getElementById("ranger");
	i3Section.addEventListener( 'click', makeVisible(), false);
	rangerSection.addEventListener( 'click', makeVisible(), false);

	console.log("Event Set");
};

const makeVisible = function() {
	console.log( " I am inside makeVisible " );
};
setDisplayEvent();
makeVisible();
jaja();

export {setDisplayEvent, makeVisible, jaja}
