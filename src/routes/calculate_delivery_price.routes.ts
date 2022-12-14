import { Router } from 'express';

import CalculateDeliveryPriceController from '../modules/zip_ranges/useCases/CalculateDeliveryPrice/CalculateDeliveryPriceController';

const calculateDeliveryPriceRouter = Router();

const calculateDeliveryPriceController = new CalculateDeliveryPriceController();

calculateDeliveryPriceRouter.get(
  '/',
  calculateDeliveryPriceController.calculate
);

export default calculateDeliveryPriceRouter;
