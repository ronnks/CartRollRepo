import { Product } from "../models";
import { requireAuth } from "../middleware";

export async function handleGetProducts(req, res) {
  const products = await Product.find({}).sort({ created: -1 });

  res.json(products.map((prod) => prod.toJSON()));
}

export async function handleCreateProduct(req, res) {
  const { name, price } = req.body;

  const product = new Product({ name, price });

  await product.save();
  res.json(product.toJSON());
}

export async function handleGetProductById(req, res) {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (product) {
    res.json(product.toJSON());
  } else {
    res.sendStatus(404);
  }
}

export async function handleLikeProduct(req, res) {
  const { productId } = req.params;
  const { user } = req;
  const product = await Product.findById(productId);

  if (!product) return res.status(404).json({ error: "Cannot find product" });

  try {
    if (user.likedProducts.includes(product.id)) {
      const result = await user.updateOne({
        $pull: { likedProducts: product.id },
      });

      res.json(result.toJSON());
    } else {
      const result = await user.updateOne({
        $push: { likedProducts: product.id },
      });

      res.json(result.toJSON());
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
}
