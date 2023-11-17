import cors from 'cors';
import express from 'express';
import registerRouter from './routes/index.js';
import mongoose from 'mongoose';
import models from './models/index.js';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://info6150user:admin@info6150fall2023.ijcaexm.mongodb.net/coursedb?retryWrites=true&w=majority');
    registerRouter(app);
}

export default initialize;