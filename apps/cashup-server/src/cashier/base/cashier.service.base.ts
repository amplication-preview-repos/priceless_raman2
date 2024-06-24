/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Cashier as PrismaCashier } from "@prisma/client";

export class CashierServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CashierCountArgs, "select">): Promise<number> {
    return this.prisma.cashier.count(args);
  }

  async cashiers(args: Prisma.CashierFindManyArgs): Promise<PrismaCashier[]> {
    return this.prisma.cashier.findMany(args);
  }
  async cashier(
    args: Prisma.CashierFindUniqueArgs
  ): Promise<PrismaCashier | null> {
    return this.prisma.cashier.findUnique(args);
  }
  async createCashier(args: Prisma.CashierCreateArgs): Promise<PrismaCashier> {
    return this.prisma.cashier.create(args);
  }
  async updateCashier(args: Prisma.CashierUpdateArgs): Promise<PrismaCashier> {
    return this.prisma.cashier.update(args);
  }
  async deleteCashier(args: Prisma.CashierDeleteArgs): Promise<PrismaCashier> {
    return this.prisma.cashier.delete(args);
  }
}
