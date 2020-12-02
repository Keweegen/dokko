import { InputType, Field } from '@nestjs/graphql'
import { rolesCreateInput } from '@prisma/client'

@InputType()
export class CreateRoleInput implements rolesCreateInput {
  @Field()
  name: string
}
