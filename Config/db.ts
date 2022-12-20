import mongoose from "mongoose"

const liveURI = "mongodb+srv://sylviaDB:atlaspassword@cluster0.fhx2vt1.mongodb.net/Sylvia-Ebooks?retryWrites=true&w=majority"

mongoose.connect(liveURI);

mongoose.connection.on(
    "open", () =>{
        console.log("Database is connected to server");
    }
).once(
    "error", (error) =>{
        console.log("An error occured in connecting DB");
    }
)