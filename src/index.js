class TBlank {
  constructor() {
    this.allA = document.getElementsByTagName("a")
    this.aList = Array.prototype.slice.call(this.allA)
    this.device = this.getDevice();

    if (this.device == 'other') {
      self = this
      this.aList.forEach(function (item) {
        let url = item.getAttribute("href")
        if (!self.isInternalLink(url)) {
          item.setAttribute("target", "_blank")
        }
      })
    }
  }

  isInternalLink(url) {
    if (typeof(url) != 'string') {
      return false
    } else if (url.indexOf(location.protocol + '//' + location.host) == 0) {
      return true
    } else if (url.match(/^https?:\/\//)) {
      return false
    } else {
      return true
    }
  }

  getDevice() {
    var ua = window.navigator.userAgent
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp'
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab'
    }else{
        return 'other'
    }
  }
}

new TBlank()
