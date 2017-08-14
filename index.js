var allA = document.getElementsByTagName("a");
var aList = Array.prototype.slice.call(allA);

aList.forEach(function (item) {
  var url = item.getAttribute("href");
  if (!isInternalLink(url)) {
    item.setAttribute("target", "_blank");
  }
});

function isInternalLink(url) {
	if (typeof(url) != 'string') {
		return false;
	} else if (url.indexOf(location.protocol + '//' + location.host) == 0) {
		return true;
	} else if (url.match(/^https?:\/\//)) {
		return false;
	} else {
		return true;
	}
}
