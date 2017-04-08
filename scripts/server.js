var http = require("http");
var fs = require("fs");

/* note on 'require' statement */
/* require() is not part of your standard JavaScript. In context to your question and tags, require() is built into Node.js to load modules. The concept is similar to C/Java/Python/[insert more languages here] imports or includes.*/

var server = http.createServer(function (req, res) {
    displayForm(res);
});

function displayForm(res) {
    fs.readFile("form.html", function (err, data) {
        res.writeHead(200, {
            "Content-Type": "text/html",
                "Content-Length": data.length
        });
        res.write(data);
        res.end();
    });
}

server.listen(1185);
console.log("Server listening on 1185");