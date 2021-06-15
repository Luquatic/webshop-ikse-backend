import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Product, ProductDocument} from './schemas/products.schema';
import {Model} from 'mongoose';
import {CreateProductDto} from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async findById(id: string): Promise<Product | undefined> {
        return this.productModel.findOne({id})
    }
}
