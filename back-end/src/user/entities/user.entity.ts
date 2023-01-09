import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: false,
  })
  _id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  firtsName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  image: string;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
