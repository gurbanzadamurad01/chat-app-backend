import {v2 as cloudinary} from 'cloudinary';

import { environmentsConfig } from "../config/environments.config.js";

const {cldName, cldKey, cldSecret} = environmentsConfig.development;

cloudinary.config({
   cloud_name: cldName,
   api_key: cldKey,
   api_secret: cldSecret
});

export default cloudinary;

