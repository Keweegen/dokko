import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Role } from './models/role.model'
import { CreateRoleInput } from './dto/create-role.input'
import { UpdateRoleInput } from './dto/update-role.input'

import {
  rolesWhereUniqueInput,
  rolesWhereInput,
  rolesOrderByInput,
} from '@prisma/client'

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRoleInput): Promise<Role> {
    return this.prisma.roles.create({ data })
  }

  async findAll(params: {
    skip?: number
    take?: number
    cursor?: rolesWhereUniqueInput
    where?: rolesWhereInput
    orderBy?: rolesOrderByInput
  }): Promise<Role[]> {
    const { skip, take, cursor, where, orderBy } = params

    return this.prisma.roles.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async findOne(where: rolesWhereUniqueInput): Promise<Role | null> {
    return this.prisma.roles.findOne({ where })
  }

  async update(params: {
    where: rolesWhereUniqueInput
    data: UpdateRoleInput
  }): Promise<Role> {
    const { where, data } = params

    return this.prisma.roles.update({
      data,
      where,
    })
  }

  async remove(where: rolesWhereUniqueInput): Promise<Role> {
    return this.prisma.roles.delete({ where })
  }
}
