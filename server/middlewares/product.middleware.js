function validateProduct(req, res, next) {
  const { sku, name, brand, category, price, stock } = req.body;

  if (!sku || !sku.trim()) {
    return res.status(400).json({
      error: "SKU is required.",
    });
  }

  if (!name || !name.trim()) {
    return res.status(400).json({
      error: "Name is required.",
    });
  }

  if (!brand) {
    return res.status(400).json({
      error: "Brand is required.",
    });
  }

  if (!category) {
    return res.status(400).json({
      error: "Category is required.",
    });
  }

  if (price == null || price < 0) {
    return res.status(400).json({
      error: "Price must be greater than or equal to 0.",
    });
  }

  if (stock == null || stock < 0) {
    return res.status(400).json({
      error: "Stock must be greater than or equal to 0.",
    });
  }

  next();
}

module.exports = {
  validateProduct,
};