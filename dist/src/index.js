"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 2100;
require("../Config/db");
const booksRoutes_1 = __importDefault(require("../Router/booksRoutes"));
const server = (0, express_1.default)();
server.use("/api", booksRoutes_1.default);
server.use((0, cors_1.default)());
server.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server has been created",
    });
});
server.listen(PORT, () => {
    console.log("Listening to my PORT: ", PORT);
});
