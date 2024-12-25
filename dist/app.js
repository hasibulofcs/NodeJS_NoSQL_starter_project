"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./app/routes");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const http_status_codes_1 = require("http-status-codes");
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = require("express-rate-limit");
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, // Limit each IP to 100 requests per window
});
const app = (0, express_1.default)();
app.use((0, helmet_1.default)()); // prevent attacks like click-jacking and XSS
app.use(limiter); // limiting api requests
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", routes_1.AppRoutes);
app.get("/", (_req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Welcome to E-commerce app API",
    });
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
