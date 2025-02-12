import * as dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = process.env.JSON_BASE_URL || 'http://localhost:3000';
