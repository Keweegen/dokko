import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { User } from './models/user.model'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import {
  usersWhereUniqueInput,
  usersWhereInput,
  usersOrderByInput,
} from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserInput): Promise<User> {
    return this.prisma.users.create({ data })
  }

  async findAll(params: {
    skip?: number
    take?: number
    cursor?: usersWhereUniqueInput
    where?: usersWhereInput
    orderBy?: usersOrderByInput
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params

    return this.prisma.users.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async findOne(where: usersWhereUniqueInput): Promise<User | null> {
    return this.prisma.users.findOne({ where })
  }

  async update(params: {
    where: usersWhereUniqueInput
    data: UpdateUserInput
  }): Promise<User> {
    const { where, data } = params

    return this.prisma.users.update({
      data,
      where,
    })
  }

  async remove(where: usersWhereUniqueInput): Promise<User> {
    return this.prisma.users.delete({ where })
  }
}
