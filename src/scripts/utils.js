export function circlePointCollision(x, y, item) {
	return distanceXY(x, y, item.x, item.y) < item.radius;
}

export function distanceXY(x0, y0, x1, y1) {
		let dx = x1 - x0,
			dy = y1 - y0;
		return Math.sqrt(dx * dx + dy * dy);
}
