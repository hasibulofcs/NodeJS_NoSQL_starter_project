"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const products_controller_1 = require("./products.controller");
const router = (0, express_1.Router)();
router.post("/", products_controller_1.ProductsController.createProduct);
router.get("/", products_controller_1.ProductsController.getAllProducts);
router.get("/:productId", products_controller_1.ProductsController.getProductById);
router.put("/:productId", products_controller_1.ProductsController.updateProductById);
router.delete("/:productId", products_controller_1.ProductsController.deleteProductById);
exports.ProductRoutes = router;