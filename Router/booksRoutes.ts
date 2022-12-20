import imageUploads from "../Config/multer";

import { getAbook, getAllBooks, QuerySearch, UploadBooks, UserViews } from "../Controller/bookControls";

import express from "express";

const Router = express();

Router.route("/getbooks").get(getAllBooks);
Router.route("/getabook/:id").get(getAbook);
Router.route("/uploadbooks").post(imageUploads, UploadBooks);
Router.route("/views/:id").patch(UserViews);
Router.route("/querysearch").patch(QuerySearch);

export default Router;