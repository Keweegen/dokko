import { ObjectType, Field, ID, Int } from '@nestjs/graphql'
import { users } from '@prisma/client'

@ObjectType()
export class User implements users {
  @Field(() => ID)
  id: number

  @Field()
  username: string

  @Field()
  password: string

  @Field(() => Int)
  role_id: number

  @Field()
  active: boolean
}
