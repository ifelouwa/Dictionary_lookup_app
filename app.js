import express from 'express';
import dictionary from './dictionary.json' with {type : 'json'};
import lookupRoute from '../backend/jsonRoute.js';

const app = express();
//  Using Middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

// accessing routes
app.use('/jsonRoute', lookupRoute);


export default app;