var http = require("http"),
    query = require("mcquery"),
    url = require("url"),
    color = require("colors");

var log = function(msg) {
    console.log("flipbucket > ".blue + msg);
}

var server = http.createServer(function(req, res) {
    var j = JSON.parse(JSON.stringify(url.parse(req.url, true)));
    if (j.pathname == "/query") { if (j.query.host) {
        var q = query.Query(j.query.host, j.query.port);
        q.doHandshake();
        q.basic_stat(function(err, statinfo) {
            log(statinfo);
        });
    }}
});
server.listen(1337);
