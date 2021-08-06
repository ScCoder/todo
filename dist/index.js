"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var port = 5000;
var app = express_1["default"]();
app.get('/', function (request, response) {
    response.send("Hello world!");
});
app.listen(port, function () { return console.log("Server started on port " + port); });