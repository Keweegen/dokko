import { Body } from '@nestjs/common'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { RolesService } from './roles.service'
import { Role } from './models/role.model'
import { CreateRoleInput } from './dto/create-role.input'
import { UpdateRoleInput } from './dto/update-role.input'
import {
  rolesWhereUniqueInput,
  rolesWhereInput,
  rolesOrderByInput,
} from '@prisma/client'

@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => Role)
  createRole(
    @Args('createRoleInput') createRoleInput: CreateRoleInput,
  ): Promise<Role> {
    return this.rolesService.create(createRoleInput)
  }

  @Query(() => [Role], { name: 'roles' })
  findAll(
    @Body()
    params: {
      skip?: number
      take?: number
      cursor?: rolesWhereUniqueInput
      where?: rolesWhereInput
      orderBy?: rolesOrderByInput
    },
  ): Promise<Role[]> {
    return this.rolesService.findAll(params)
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id') id: number): Promise<Role | null> {
    return this.rolesService.findOne({ id })
  }

  @Mutation(() => Role)
  updateRole(
    @Args('id') id: number,
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput,
  ): Promise<Role> {
    return this.rolesService.update({ where: { id }, data: updateRoleInput })
  }

  @Mutation(() => Role)
  removeRole(@Args('id') id: number): Promise<Role> {
    return this.rolesService.remove({ id })
  }
}
