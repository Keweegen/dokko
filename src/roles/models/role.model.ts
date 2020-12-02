import { ObjectType, Field, ID } from '@nestjs/graphql'
import { roles } from '@prisma/client'

@ObjectType()
export class Role implements roles {
  @Field(() => ID)
  id: number

  @Field()
  name: string
}
