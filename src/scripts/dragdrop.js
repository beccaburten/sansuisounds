// Pasting this into index.js works for circle moving


// import {circlePointCollision} from './scripts/utils';



window.onload = function() {
	let sandbox = document.getElementById("sandbox");
    let width = sandbox.width = window.innerWidth;
    let height = sandbox.height = 0.75 * window.innerHeight;
    let c = sandbox.getContext("2d");
	let	handle = {
			x: width / 2,
			y: height / 2,
			radius: 20
		};
	let	offset = {};

	drawHandle();

	function drawHandle() {
		c.clearRect(0, 0, width, height);

		c.fillStyle = "black";
		c.beginPath();
		c.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
		c.fill();
	}

	document.addEventListener("mousedown", (event) => {
		if(circlePointCollision(event.offsetX, event.offsetY, handle)) {
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
			offset.x = event.offsetX - handle.x;
			offset.y = event.offsetY - handle.y;
		}
	});

	function onMouseMove(event) {
		handle.x = event.offsetX;// - offset.x;
		handle.y = event.offsetY;// - offset.y;
		drawHandle();
	}

	function onMouseUp(event) {
		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", onMouseUp);
	}


};