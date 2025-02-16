import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataResponseInterceptor } from './common/interceptors/data-response/data-response.interceptor';
import { ConfigService } from '@nestjs/config';
import { config } from 'aws-sdk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }))

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJs Masterclass - Blog app API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService("http://localhost:3000/terms-of-service")
    .setLicense('MIT License', "https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt")
    .addServer('http://localhost:30000')
    .setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)

  const configService = app.get(ConfigService);

  config.update({
    credentials: {
      accessKeyId: configService.get("appConfig.awsAccessKeyId"),
      secretAccessKey: configService.get("appConfig.awsSecretAccesKey")
    },
    region: configService.get("appConfig.awsRegion")
  })
  app.enableCors();
  //app.useGlobalInterceptors(new DataResponseInterceptor())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
