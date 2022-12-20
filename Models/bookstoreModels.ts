import mongoose from "mongoose";

interface books {
    author: string,
    tittle: string,
    coverImage: string,
    summary: string,
    ISBN: string,
    views: [],
    authorImage: string,
    category: string,
}

interface iBooks extends books, mongoose.Document{}

const bookSchema = new mongoose.Schema({
    author: String,
    tittle: String,
    coverImage: String,
    summary: String,
    ISBN: String,
    views: [],
    authorImage: String,
    category: String,
});

export default mongoose.model<iBooks>("Sylvia-Books", bookSchema)