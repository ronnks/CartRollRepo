import bcrypt from "bcryptjs";
import { User } from "../models";

export async function handleGetUserByUsername(req, res) {
  const { username } = req.params;

  const populateQuery = [
    {
      path: "orders",
      populate: { path: "items", select: ["name", "price"] },
    },
  ];

  const user = await User.findOne({ username }).populate(populateQuery).exec();

  if (!user) return res.sendStatus(404);

  res.json(user.toJSON());
}

export async function handleUpdateUser(req, res) {
  const { username } = req.params;
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await User.findOneAndUpdate(
      { username },
      { passwordHash: hashedPassword },
      { new: true, runValidators: true }
    );
    res.json(user.toJSON());
  } catch (error) {
    res.sendStatus(404);
  }
}
