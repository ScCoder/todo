"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
class Todo {
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield db_1.pool.query('SELECT id, title FROM public."TODOS";');
                return res.rows;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    Create(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield db_1.pool.query(`INSERT INTO public."TODOS"(id, title) VALUES ($1, $2);`, [todo.id, todo.title]);
                return true;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = new Todo();
//# sourceMappingURL=todo.js.map