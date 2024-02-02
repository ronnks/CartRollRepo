import { Router } from "express";
import {
  handleGetUserByUsername,
  handleUpdateUser,
} from "../controllers/users.controller";

const usersRoutes = Router();

usersRoutes
  .route("/:username")
  .get(handleGetUserByUsername)
  .put(handleUpdateUser);

export default usersRoutes;
