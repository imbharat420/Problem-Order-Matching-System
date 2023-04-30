import express from 'express';


import connectDB from './config/connectDB.js';

/**[ Middlewares ]**/
import errorHandler from './middleware/errorHandler.js';
import appMiddleware from './middleware/app.middleware.js';

/**[ Routes ]**/
import router from './routes/order.routes.js';


const main = async () => {
  const port = 3001;

  try {
    const app = express();
    appMiddleware(app)
   


    /**[ Register Route ]**/
    app.use('/api',router)

    await connectDB()


    app.use(errorHandler)
    
    
    app.listen(port, () => {
      console.log(`listening:*${port}`);
    });

  } catch (e) {}
};

main().catch((e) => console.error(e));