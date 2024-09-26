
locals {
  file_list = {
    "index.html" = {
      source      = "web-site-files/index.html"
      content_type = "text/html"
    },
    "style.css" = {
      source      = "web-site-files/style.css"
      content_type = "text/css"
    },
    "script.js" = {
      source      = "web-site-files/script.js"
      content_type = "application/javascript"
    },
    "favicon.ico" = {
      source      = "web-site-files/favicon.ico"
      content_type = "image/x-icon"
    }
  }
}