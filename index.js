var allA = document.getElementsByTagName("a");
var aList = Array.prototype.slice.call(allA);

var device = getDevice();

if (device == 'other') {
  aList.forEach(function (item) {
    var url = item.getAttribute("href");
    if (!isInternalLink(url)) {
      item.setAttribute("target", "_blank");
    }
  });
}

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

function getDevice() {
  var ua = window.navigator.userAgent;
  if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
      return 'sp';
  }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
      return 'tab';
  }else{
      return 'other';
  }
}
