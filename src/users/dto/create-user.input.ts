import { InputType, Field, Int } from '@nestjs/graphql'
import {
  usersCreateInput,
  rolesCreateOneWithoutUsersInput,
} from '@prisma/client'

@InputType()
export class CreateUserInput implements usersCreateInput {
  @Field()
  username: string

  @Field()
  password: string

  @Field(() => Int, { defaultValue: 3 })
  roles: rolesCreateOneWithoutUsersInput

  @Field()
  active: boolean
}
