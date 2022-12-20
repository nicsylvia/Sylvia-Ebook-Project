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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViews = exports.UploadBooks = exports.getAllBooks = exports.getAbook = exports.QuerySearch = void 0;
const cloudinary_1 = __importDefault(require("../Config/cloudinary"));
const bookstoreModels_1 = __importDefault(require("../Models/bookstoreModels"));
// get All Books:
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBooks = yield bookstoreModels_1.default.find();
        return res.status(200).json({
            message: "Successfully got all books",
            data: getBooks
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting all books",
            data: error
        });
    }
});
exports.getAllBooks = getAllBooks;
// get Single Book:
const getAbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getOneBook = yield bookstoreModels_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "Successfully got this book details",
            data: getOneBook
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting this book details",
            data: error
        });
    }
});
exports.getAbook = getAbook;
// post:
const UploadBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { views, author, category, summary, tittle } = req.body;
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        let cloudImg = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const newbooks = yield bookstoreModels_1.default.create({
            author,
            tittle,
            coverImage: cloudImg.secure_url,
            summary,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            views,
            authorImage: author.charAt(0).toUpperCase(),
            category,
        });
        return res.status(201).json({
            message: "Successfully Uploaded books",
            data: newbooks
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in uploading books",
            data: error
        });
    }
});
exports.UploadBooks = UploadBooks;
// views:
const UserViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const views = yield bookstoreModels_1.default.findByIdAndUpdate(req.params.id, {
            $push: { views: req.body.ip }
        }, { new: true });
        return res.status(200).json({
            message: "Successfully got user views",
            data: views
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting user views",
            data: error
        });
    }
});
exports.UserViews = UserViews;
// search:
const QuerySearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query;
        const searchQuery = yield bookstoreModels_1.default.find(search);
        return res.status(200).json({
            message: "Successfully got the search words",
            data: searchQuery
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting search words",
            data: error
        });
    }
});
exports.QuerySearch = QuerySearch;
