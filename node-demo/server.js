var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('Çָ¶¨¶˿ںźò»2£¿\nnode server.js 8888 ÕÑ²»»á£¿')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** ´Óâ¿ªʼ¿´£¬ÉÃ²»Ҫ¿´ ************/

  console.log('HTTP ·¾¶Ϊ\n' + path)
  if(path == '/style.js'){
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body{background-color: #ddd;}h1{color: red;}')
    response.end()
  }else if(path == '/script.html'){
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.write('alert("ÕÊJSִÐµÄ)')
    response.end()
  }else if(path == '/index.css'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>'  + 
      '<head><link rel="stylesheet" href="/style.js">' +
      '</head><body>'  +
      '<h1>ÄºÃ/h1>' +
      '<script src="/script.html"></script>' +
      '</body></html>')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }

  /******** ´úÊ£¬ÏÃ²»Ҫ¿´ ************/
})

server.listen(port)
console.log('¼à ' + port + ' ³ɹ¦\nÇÓÔ¿ÕÐªÌ720¶È»ºó緹ìòhttp://localhost:' + port)


