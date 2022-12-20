import express from "express";

import cors from "cors";

import { Request, Response } from "express";

const PORT: number | string = process.env.PORT || 2100;

require("../Config/db");

import Router from "../Router/booksRoutes";

const server = express();

server.use("/api", Router);

server.use(cors())

server.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Server has been created",
    })
});

server.listen(PORT, () =>{
    console.log("Listening to my PORT: ", PORT);
})