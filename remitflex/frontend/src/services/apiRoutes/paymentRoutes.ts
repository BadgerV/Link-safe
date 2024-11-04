import { hostRoute } from "../routesHelper";

const paymentRoute = `${hostRoute}/payment`;

export const currentRate = `${paymentRoute}/rate`;

export const remitPayment = `${paymentRoute}/remit`;

export const billPayment = `${paymentRoute}/bill`;
