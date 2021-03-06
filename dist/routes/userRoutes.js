"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
var verifyToken_1 = require("../utils/verifyToken");
var router = (0, express_1.Router)();
router.get('/users', UserController_1.getUsers);
router.post('/users', UserController_1.createUser);
router.get('/users/:id', UserController_1.getUser);
router.put('/users', UserController_1.updateUser);
router.delete('/users/:id', UserController_1.deleteUser);
router.post('/signUp', UserController_1.signUp);
router.post('/logIn', UserController_1.logIn);
router.get('/profile', verifyToken_1.TokenValidation, UserController_1.profile);
exports.default = router;
