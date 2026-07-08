const prisma = require("../config/prisma");

async function getAllProducts(req, res) {
  const products = await prisma.product.findMany();

  res.json(products);
}

async function createProduct(req, res, next) {
  try {
    const { sku, name, brand, category, price, stock } = req.body;

    const product = await prisma.product.create({
      data: {
        sku,
        name,
        brand,
        category,
        price,
        stock,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        error: "Product ID must be a valid number.",
      });
    }

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({
        error: "Product not found.",
      });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        error: "Product ID must be a valid number.",
      });
    }

    const existingProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!existingProduct) {
      return res.status(404).json({
        error: "Product not found.",
      });
    }

    const { sku, name, brand, category, price, stock } = req.body;

    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        sku,
        name,
        brand,
        category,
        price,
        stock,
      },
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        error: "Product ID must be a valid number.",
      });
    }

    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
