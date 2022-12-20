"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const liveURI = "mongodb+srv://sylviaDB:atlaspassword@cluster0.fhx2vt1.mongodb.net/Sylvia-Ebooks?retryWrites=true&w=majority";
mongoose_1.default.connect(liveURI);
mongoose_1.default.connection.on("open", () => {
    console.log("Database is connected to server");
}).once("error", (error) => {
    console.log("An error occured in connecting DB");
});
