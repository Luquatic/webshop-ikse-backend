import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProductService} from './product.service';
import {CreateProductDto} from './dto/create-product.dto';
import {Product} from './schemas/products.schema';

@Controller()
export class ProductsController {
    constructor(private readonly productService: ProductService) {
    }

    @Post('/api/products')
    async create(@Body() product: CreateProductDto) {
        console.log(product);
        await this.productService.create(product);
    }

    @Get('/api/products')
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }
}
