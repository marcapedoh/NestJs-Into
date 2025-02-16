import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiHeader, ApiHeaders, ApiOperation } from '@nestjs/swagger';
import { Express } from 'express'
import { UploadsService } from './providers/uploads.service';
@Controller('uploads')
export class UploadsController {

    constructor(private readonly uploadService: UploadsService) { }

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    @ApiHeaders([
        {
            name: 'Content-Type',
            description: 'multipart/form-data'
        },
        {
            name: 'Authorization',
            description: 'Bearer Token'
        }
    ])
    @ApiOperation({
        summary: "Upload a new image to the server"
    })
    public uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.uploadService.uploadFile(file);
    }
}
