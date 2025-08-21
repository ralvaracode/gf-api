import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigService
import databaseConfig from './config/database.config';
import { CardModule } from "./card/card.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      load: [databaseConfig],      
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => configService.get('database'), // Get 'database' config
      inject: [ConfigService], // Inject ConfigService to access 'database' config
    }),
    CardModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
