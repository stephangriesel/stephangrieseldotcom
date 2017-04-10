var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
var util = require("util");

/* note on 'require' statement */
/* require() is not part of your standard JavaScript. In context to your question and tags, require() is built into Node.js to load modules. The concept is similar to C/Java/Python/[insert more languages here] imports or includes.*/

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == "get") {
        displayForm(res);
    } else if (req.method.toLowerCase() == "post") {
        // processAllFieldsOfTheForm(req,res);
        processFormsFieldsIndividual(req, res);
    }
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

function processAllFieldsOfTheForm(req,res) {
    var form = new formidable.IncomingForm();

    form.parse(req,function (err, fields, files) {
        // Store the data from the fields in your data store
        // The data store could be a file or database or any other store based on your application
        res.writeHead(200, {
            "content-type": "text/plain"
        });
        res.write("received the data:\n\n");
        red.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}

function processFormsFieldsIndividual(req, res){
    // Store the data from the fields in your data store.
    // The data store could be a file or database or any other store based on your application.
    var fields = [];
    var form = new formidable.IncomingForm();
    form.on("fields", function (field, value) {
        console.log(field);
        console.log)value);
        fields[field] = value;
    });

    form.on("end", function (){
        res.writeHead(200, {
            "content-type": "text/plain"
        });
        res.write("received the data:\n\n");
        res.end(util.inspect({
            fields: fields
        }));
    });
    forms.parse(req);
}

server.listen(1185);
console.log("Server listening on 1185");