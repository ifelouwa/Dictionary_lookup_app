import express from 'express';
import dictionary from './dictionary.json' with {type : 'json'};
import lookupRoute from './routes/jsonRoute.js';
import { errorHandler} from './Middleware/errorHandler.js';

const app = express();

//  Middleware
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

//  If no route mateches, it sends 404 error
app.use((req, res, next) => {
    const err = new Error("Route Not Found");
    err.status = 404;
    next(err);
});

//  Error Handler
app.use(errorHandler);


export default app;