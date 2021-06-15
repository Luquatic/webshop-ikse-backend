import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({required: true})
    brand: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    price: number;

    @Prop({required: true})
    imagePath: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
