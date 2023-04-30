import express from 'express';

const router = express.Router();

import PendingOrder from '../models/pendingOrder.model.js';
import CompletedOrder from '../models/completeOrder.model.js';
 

router.get('/pending-orders', async (req, res) => {
    const pendingOrders = await PendingOrder.find();
    res.json(pendingOrders);
});

router.get('/completed-orders', async (req, res) => {
    const completedOrders = await CompletedOrder.find();
    res.json(completedOrders);
});


router.post('/new-order', async (req, res,next) => {
 try{
  const { side, qty, price } = req.body;

  const oppositeSide = side === 'Buy' ? 'Sell' : 'Buy';
  const matchingCondition = side === 'Buy' ? { $lte: price } : { $gte: price };

  const matchingOrder = await PendingOrder.findOne({
    side: oppositeSide,
    price: matchingCondition,
  }).sort({ price: oppositeSide === 'Buy' ? 1 : -1 });

  if (matchingOrder) {
      const completedQty = Math.min(qty, matchingOrder.qty);
      const completedPrice = matchingOrder.price;

      const completedOrder = new CompletedOrder({
        price: completedPrice,
        qty: completedQty,
      });
      await completedOrder.save();

      if (qty > matchingOrder.qty) {
        const remainingQty = qty - matchingOrder.qty;
        const newPendingOrder = new PendingOrder({ 
          side,
          price,
          qty: remainingQty,
        });
        await newPendingOrder.save();
      } else if (qty < matchingOrder.qty) {
        matchingOrder.qty -= qty;
        await matchingOrder.save();
      } else {
        await PendingOrder.deleteOne({ _id: matchingOrder._id });
      }

    res.status(201).json({ message: 'Order matched and processed' });
  } else {
    const newPendingOrder = new PendingOrder({ side, qty, price });
    await newPendingOrder.save();
    res.status(201).json({ message: 'Order added to pending orders' });
  }
 }catch(error){
     next(error)
 }
}); 



export default router;