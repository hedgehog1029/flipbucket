var http = require("http"),
    Query = require("mcquery"),
    url = require("url"),
    color = require("colors");

var log = function(msg) {
    console.log("flipbucket > ".blue + msg);
}

var server = http.createServer(function(req, res) {
    var j = JSON.parse(JSON.stringify(url.parse(req.url, true)));
    if (j.pathname == "/query") { if (j.query.host) {
        var q = new Query(j.query.host, j.query.port);

        q.connect(function(err) {
            if (err) log(err);
            q.basic_stat(function(err, statinfo) {
                if (err) log(err);
                log(statinfo);
            });
        }
    }}
});
server.listen(1337);
