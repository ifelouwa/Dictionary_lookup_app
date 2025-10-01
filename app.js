import express from 'express';
import lookupRoute from './routes/jsonRoute.js';
import { errorHandler} from './Middleware/errorHandler.js';

const app = express();

//  Middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

// Accessing Routes
app.use('/jsonRoute', lookupRoute);

//  If no route mateches, it sends 404 error
app.use((req, res, next) => {
    const err = new Error("Route Not Found");
    err.status = 404;
    next(err);
});

//  Error Handler
app.use(errorHandler);


export default app;