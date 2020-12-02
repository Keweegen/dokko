import { Body } from '@nestjs/common'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './models/user.model'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import {
  usersWhereUniqueInput,
  usersWhereInput,
  usersOrderByInput,
} from '@prisma/client'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    const data = createUserInput
    data.roles = {
      connect: { id: Number(data.roles) },
    }

    return this.usersService.create(data)
  }

  @Query(() => [User], { name: 'users' })
  findAll(
    @Body()
    params: {
      skip?: number
      take?: number
      cursor?: usersWhereUniqueInput
      where?: usersWhereInput
      orderBy?: usersOrderByInput
    },
  ): Promise<User[]> {
    return this.usersService.findAll(params)
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id') id: number): Promise<User | null> {
    return this.usersService.findOne({ id })
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update({ where: { id }, data: updateUserInput })
  }

  @Mutation(() => User)
  removeUser(@Args('id') id: number): Promise<User> {
    return this.usersService.remove({ id })
  }
}
