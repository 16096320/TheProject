

function vidPlay(video) {
	var element = document.getElementById(video);
	element.play();
	console.log("video plays");
}

function vidPause(video) {
	var element = document.getElementById(video);
	element.pause();
	console.log("video pauses");
}