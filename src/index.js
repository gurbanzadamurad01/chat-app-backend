import { app,server } from './lib/socket.js';

import {environmentsConfig} from './config/environments.config.js';

import {accessMiddleware} from './middleware/access.middleware.js';

import { connectDB } from './lib/db.js';

import dotenv from 'dotenv';
dotenv.config();

const { port } = environmentsConfig.development;

accessMiddleware(app);

server.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
   connectDB();
});