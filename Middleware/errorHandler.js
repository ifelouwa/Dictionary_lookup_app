
// Middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // logs error details in console for debugging

  // Default error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};