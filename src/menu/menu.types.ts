import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class MenuItem {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;
}

@ObjectType()
export class Category {
  @Field()
  name: string;

  @Field(() => [MenuItem])
  items: MenuItem[];
}
