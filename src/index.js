class TBlank {
  constructor() {
    self = this
    document.addEventListener('DOMContentLoaded', function() {
      self.allA = document.getElementsByTagName("a")
      self.aList = Array.prototype.slice.call(self.allA)
      self.device = self.getDevice();

      if (self.device == 'other') {
        self.aList.forEach(function (item) {
          let url = item.getAttribute("href")
          if (!self.isInternalLink(url)) {
            item.setAttribute("target", "_blank")
          }
        })
      }
    })
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

  replace(val) {
    if (this.device == 'other') {
      let a = val.match(/<a(.|\s)*?>/gi)
      self = this
      if (a !== null) {
        a.forEach(v => {
          let x = v.match(/href="([^\"]+)"/)
          if (x !== null) {
            let url = x[1]
            if (!self.isInternalLink(url)) {
              val = val.replace(x[1], x[1]+'" target="_blank')
            }
          }
        })
      }
    }
    return val
  }
}

var tblank = new TBlank
module.exports = tblank
module.exports.default = tblank
