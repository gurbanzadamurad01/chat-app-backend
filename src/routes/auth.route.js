import express from 'express';

import {signUp,login,logout,updateProfile, checkAuth} from '../controllers/auth.controller.js';
import {protectRoute} from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/sign-up", signUp);

router.post("/login",login);

router.post("/logout", logout);

router.put("/upload-profile",protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;