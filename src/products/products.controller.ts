import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProductService} from './product.service';
import {CreateProductDto} from './dto/create-product.dto';
import {Product} from './schemas/products.schema';
import {User} from '../users/schemas/users.schema';

@Controller('/api/products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {
    }

    @Post()
    async create(@Body() product: CreateProductDto) {
        console.log(product);
        await this.productService.create(product);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): Promise<Product | undefined> {
        return this.productService.findById(params._id);
    }
}
