import { Router } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models";
import keys from "../config/keys";
import jwt from "jsonwebtoken";
import { handleSignIn, handleSignUp } from "../controllers/auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", handleSignUp);
authRoutes.post("/signin", handleSignIn);

export default authRoutes;
