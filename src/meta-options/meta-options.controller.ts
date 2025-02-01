import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-option.dtos';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {


    constructor(private readonly metaOptionService: MetaOptionsService) { }
    @Post()
    public create(@Body() createPostMetaOptionDto: CreatePostMetaOptionsDto) {
        return this.metaOptionService.create(createPostMetaOptionDto);
    }
}
