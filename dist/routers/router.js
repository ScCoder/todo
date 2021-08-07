"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TodoController_1 = __importDefault(require("../controllers/TodoController"));
const router = express_1.default.Router();
router.get('/todos', TodoController_1.default.getAll);
router.post('/addtodo', TodoController_1.default.create);
exports.default = router;
//# sourceMappingURL=router.js.map