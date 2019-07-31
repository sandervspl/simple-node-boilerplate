import dotenv from 'dotenv';
import express from 'express';
import { PORT_DEFAULT } from 'config';
import { AddressInfo } from 'net';

dotenv.config();

const app = express();

const listener = app.listen(Number(process.env.PORT) || PORT_DEFAULT, () => {
  console.log(`Server started on port ${(listener.address() as AddressInfo).port}`);
});
