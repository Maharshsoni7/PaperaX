import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName!: string;

  @Prop({ required: true })
  lastName!: string;

  @Prop({ unique: true, required: true })
  email!: string;

  @Prop()
  version?: number;

  @Prop()
  password!: string;

  @Prop()
  passwordLog!: string[];

  @Prop()
  isActive!: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
