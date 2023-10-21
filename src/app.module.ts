import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CustomersModule, ItemsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
