import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { RabbitMQ } from './common/constanstst';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options:{
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.PassengerQueue,
    }
  });
  await app.listen();
  console.log('Microservicio de pasageros esta listo');
}
bootstrap();
