var click = 0;
const pictures = ["1.jpg", "2.jpg", "5.jpg"];
function shuffle() {
	click >= pictures.length - 1 ? click = 0 : click++;
	var imageName = "url(\'../images/" + pictures[click] + "\')";
	console.log(imageName);
	document.getElementById('main').style.backgroundImage = imageName;
}