"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("../Config/multer"));
const bookControls_1 = require("../Controller/bookControls");
const express_1 = __importDefault(require("express"));
const Router = (0, express_1.default)();
Router.route("/getbooks").get(bookControls_1.getAllBooks);
Router.route("/getabook/:id").get(bookControls_1.getAbook);
Router.route("/uploadbooks").post(multer_1.default, bookControls_1.UploadBooks);
Router.route("/views/:id").patch(bookControls_1.UserViews);
Router.route("/querysearch").patch(bookControls_1.QuerySearch);
exports.default = Router;
