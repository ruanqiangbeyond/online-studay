function g(id) {
	if (id.substring(0, 1) == '.') {
		return document.getElementsByClassName(id.substring(1));
	}
	return document.getElementById(id);
}