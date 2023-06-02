import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import connection from './database/db.js';
import Routes from './routers/route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("", Routes);

connection();
app.listen(5000,console.log("server stated at 5000........"))
