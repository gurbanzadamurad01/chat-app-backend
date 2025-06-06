// 500 - Internal Server Error
// 404 - Not Found
// 400 - Bad Request

export const InternalServerError = (err, res) => {
   console.error("Internal Server Error: ", err);
   res.status(500).json({
      message: "Internal Server Error",
   });
}