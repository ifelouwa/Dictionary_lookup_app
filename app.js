import express from 'express';
<<<<<<< HEAD
import lookupRoute from './routes/jsonRoute.js';
import { errorHandler} from './Middleware/errorHandler.js';
=======
import jsonRoute from '../backend/jsonRoute.js';

>>>>>>> error-handling-query

const app = express();

//  Middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

<<<<<<< HEAD
// Accessing Routes
app.use('/jsonRoute', lookupRoute);
=======
// attach routes
app.use("/api", jsonRoute);  // handles /api/define
app.use("/api", jsonRoute);    // handles /api/add
>>>>>>> error-handling-query

//  If no route mateches, it sends 404 error
app.use((req, res, next) => {
    const err = new Error("Route Not Found");
    err.status = 404;
    next(err);
});

//  Error Handler
app.use(errorHandler);


export default app;