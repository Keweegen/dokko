import { CreateUserInput } from './create-user.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { usersUpdateInput } from '@prisma/client'

@InputType()
export class UpdateUserInput
  extends PartialType(CreateUserInput)
  implements usersUpdateInput {}
