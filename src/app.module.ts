import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [CustomersModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
