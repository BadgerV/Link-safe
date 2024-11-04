import express from "express";
import billRouter from "./bill.router";
import paymentRouter from "./payment.router";
// import userRouter from "./user.router";

const router = express.Router();

router.use("/payment", paymentRouter);
router.use("/bill", billRouter);

export { router };
