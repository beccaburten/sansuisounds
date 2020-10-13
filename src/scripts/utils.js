export function circlePointCollision(x, y, circle) {
	return distanceXY(x, y, circle.x, circle.y) < circle.radius;
}

export function distanceXY(x0, y0, x1, y1) {
		let dx = x1 - x0,
			dy = y1 - y0;
		return Math.sqrt(dx * dx + dy * dy);
}
