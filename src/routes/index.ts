import { Router } from 'express';

import calculateDeliveryPriceRouter from './calculate_delivery_price.routes';
const router = Router();

router.use('/calculate_delivery_price', calculateDeliveryPriceRouter);

export default router;
