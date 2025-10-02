import express from 'express';
import jsonRoute from '../backend/jsonRoute.js';


const app = express();
//  Using Middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

// attach routes
app.use("/api", jsonRoute);  // handles /api/define
app.use("/api", jsonRoute);    // handles /api/add


export default app;