// importing relevant modules
import express from "express";
import {
  getRate,
  initializeBillPayment,
  initializePayment,
  getBanks,
  resolveAccount
} from "../controllers/payment.controller";

// creating 'mock-up' payment route
const paymentRouter = express.Router();

// getting all USDT conversion rate
paymentRouter.get("/rate", getRate);

// Initialize new Bill payment.
paymentRouter.post("/bill", initializeBillPayment);

// Initialize new payment.
paymentRouter.post("/remit", initializePayment);

//get banks
paymentRouter.get("/banks", getBanks);

//resolve accounts
paymentRouter.post("/account", resolveAccount);

export default paymentRouter;
