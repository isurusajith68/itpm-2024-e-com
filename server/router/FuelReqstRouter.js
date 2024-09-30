import express from "express";
import {
  createFuelReqst,
  deleteFuelReqst,
  getFuelReqst,
} from "../controller/FuelRequestController.js";

const fuelReqstRouter = express.Router();

fuelReqstRouter.get("/", getFuelReqst);
fuelReqstRouter.post("/", createFuelReqst);
fuelReqstRouter.delete("/:id", deleteFuelReqst);

export default fuelReqstRouter;
