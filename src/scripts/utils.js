export function itemPointCollision(x, y, item) {
	return distanceXY(x, y, item.x, item.y) < item.width;
}

export function distanceXY(x0, y0, x1, y1) {
		let dx = x1 - x0,
			dy = y1 - y0;
			//Pythagorian Theorem to calc distance
		return Math.sqrt(dx * dx + dy * dy);
}

export function btwn(x, min, max) {
  return x > min && x < max;
}
