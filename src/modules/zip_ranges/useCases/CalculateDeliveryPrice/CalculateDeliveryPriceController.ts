import { AppError } from 'errors/AppError';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CalculateDeliveryPriceService from './CalculateDeliveryPriceService';

export default class CalculateDeliveryPriceController {
  public async calculate(
    request: Request,
    response: Response
  ): Promise<Response> {
    const calculateDeliveryPrice = container.resolve(
      CalculateDeliveryPriceService
    );

    const {
      zip_origin,
      zip_destination,
      height,
      width,
      depth,
      apply_riderize_discount,
    } = request.query;
    let { weight } = request.query;

    if (apply_riderize_discount === 't' && !height && !width && !depth) {
      // HACK para deixar um frete fixo até os produtos terem volume
      return response.status(200).json({
        type: 'success',
        data: {
          price: 19.9,
          delivery_time: 10,
          number_service: '03298',
        },
      });
    }

    if (!zip_origin) {
      throw new AppError('Cep de origem não informado.');
    }
    if (!zip_destination) {
      throw new AppError('Cep de destino não informado.');
    }
    if (!weight) {
      throw new AppError('Peso não informado.');
    }
    if (!height) {
      throw new AppError('Altura não informada.');
    }
    if (!width) {
      throw new AppError('Largura não informada.');
    }
    if (!depth) {
      throw new AppError('Profundidade não informada.');
    }

    const IATACoeficient = 6000;

    if (weight && Number(weight) < 0.3) {
      weight = '0.3';
    } else if (weight && Number(weight) > 0.3 && Number(weight) < 1) {
      weight = '1';
    } else if (weight && Number(weight) > 1 && Number(weight) <= 30) {
      weight = Math.ceil(Number(weight)).toString();
    } else if (weight && Number(weight) > 30) {
      throw new AppError(
        'Peso limite excedido, insira um peso de 30kg ou menos.'
      );
    }

    const cubicWeight =
      (Number(height) * Number(width) * Number(depth)) / IATACoeficient;

    const weightConsideredToCalculate =
      cubicWeight <= 10 ? Number(weight) : Number(cubicWeight);

    const deliveryPrice = await calculateDeliveryPrice.execute({
      zip_origin: zip_origin as string,
      zip_destination: zip_destination as string,
      weight: weightConsideredToCalculate,
      number_service: '03298',
      apply_riderize_discount: apply_riderize_discount === 't' ? true : false,
    });

    return response.status(200).json({
      type: 'success',
      data: {
        price: deliveryPrice.value,
        delivery_time: deliveryPrice.delivery_time,
        number_service: deliveryPrice.number_service,
      },
    });
  }
}
