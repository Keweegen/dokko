import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesResolver } from './roles.resolver'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [PrismaService, RolesResolver, RolesService],
})
export class RolesModule {}
