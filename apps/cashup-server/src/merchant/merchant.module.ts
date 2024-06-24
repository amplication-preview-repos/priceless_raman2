import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MerchantModuleBase } from "./base/merchant.module.base";
import { MerchantService } from "./merchant.service";
import { MerchantController } from "./merchant.controller";
import { MerchantResolver } from "./merchant.resolver";

@Module({
  imports: [MerchantModuleBase, forwardRef(() => AuthModule)],
  controllers: [MerchantController],
  providers: [MerchantService, MerchantResolver],
  exports: [MerchantService],
})
export class MerchantModule {}
