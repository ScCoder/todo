"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var TodoController_1 = __importDefault(require("../controllers/TodoController"));
var router = express_1["default"].Router();
router.get('/todos', TodoController_1["default"].getAll);
router.post('/addtodo', TodoController_1["default"].create);
exports["default"] = router;
