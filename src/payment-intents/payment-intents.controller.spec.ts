import { Test, TestingModule } from '@nestjs/testing';
import { PaymentIntentsController } from './payment-intents.controller';
import { PaymentIntentsService } from './payment-intents.service';

describe('PaymentIntentsController', () => {
  let controller: PaymentIntentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentIntentsController],
      providers: [PaymentIntentsService],
    }).compile();

    controller = module.get<PaymentIntentsController>(PaymentIntentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
