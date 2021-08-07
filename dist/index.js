"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
dotenv.config();
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routers/router"));
const port = process.env.PORT || 5000;
const app = express_1.default();
app.get('/', (request, response) => {
    response.send("Hello world!");
});
app.use(express_1.default.json());
app.use('/api', router_1.default);
app.listen(port, () => console.log(`Server started on port ${port}`));
//# sourceMappingURL=index.js.map