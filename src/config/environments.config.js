import 'dotenv/config';

export const environmentsConfig = {
   development: {
      port: process.env.PORT,
      mongodb_url: process.env.MONGODB_URL,
      json_secret_key: process.env.JWT_SECRET,
      development: process.env.NODE_ENV,
      cldName: process.env.CLOUDINARY_NAME,
      cldKey: process.env.CLOUDINARY_API_KEY,
      cldSecret: process.env.CLOUDINARY_SECRET_KEY,
      UILocal: process.env.NODE_UI_LOCAL
   },
}