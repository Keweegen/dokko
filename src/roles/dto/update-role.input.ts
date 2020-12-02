import { CreateRoleInput } from './create-role.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { rolesUpdateInput } from '@prisma/client'

@InputType()
export class UpdateRoleInput
  extends PartialType(CreateRoleInput)
  implements rolesUpdateInput {}
