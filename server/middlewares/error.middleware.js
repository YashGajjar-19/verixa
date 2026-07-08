function errorHandler(error, req, res, next) {
  console.error(error);

  if (error.code === "P2002") {
    return res.status(409).json({
      error: "A product with this SKU already exists.",
    });
  }

  res.status(500).json({
    error: "Internal server error.",
  });
}

module.exports = errorHandler;