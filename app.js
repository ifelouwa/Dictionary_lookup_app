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
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

//  Error Handler
app.use(errorHandler);


export default app;