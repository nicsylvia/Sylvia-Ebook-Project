import cloudinary from "../Config/cloudinary";

import bookModels from "../Models/bookstoreModels";

import {Request, Response} from "express";

// get All Books:
const getAllBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const getBooks = await bookModels.find();
        return res.status(200).json({
            message: "Successfully got all books",
            data: getBooks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting all books",
            data: error
        })
    }
};
// get Single Book:
const getAbook = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const getOneBook = await bookModels.findById(req.params.id);
        return res.status(200).json({
            message: "Successfully got this book details",
            data: getOneBook
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting this book details",
            data: error
        })
    }
};
// post:
const UploadBooks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const {views, author, category, summary, tittle} = req.body;
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        let cloudImg = await cloudinary.uploader.upload(req?.file!.path)

        const newbooks = await bookModels.create({
            author,
            tittle,
            coverImage: cloudImg.secure_url,
            summary,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            views,
            authorImage: author.charAt(0).toUpperCase(),
            category,
        })
        return res.status(201).json({
            message: "Successfully Uploaded books",
            data: newbooks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in uploading books",
            data: error
        })
    }
};
// views:
const UserViews = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const views = await bookModels.findByIdAndUpdate(
            req.params.id,
            {
                $push: {views: req.body.ip}
            },
            {new: true}
        )
        return res.status(200).json({
            message: "Successfully got user views",
            data: views
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting user views",
            data: error
        })
    }
};
// search:
const QuerySearch = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const search = req.query;
        const searchQuery = await bookModels.find(search);
        return res.status(200).json({
            message: "Successfully got the search words",
            data: searchQuery
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting search words",
            data: error
        })
    }
};

export { QuerySearch, getAbook, getAllBooks, UploadBooks, UserViews}