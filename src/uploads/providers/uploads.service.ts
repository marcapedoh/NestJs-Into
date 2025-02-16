import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Upload } from '../upload.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { UploadFile } from '../interfaces/upload-file.interface';
import { fileTypes } from '../enums/file-types.enum';

@Injectable()
export class UploadsService {

    constructor(@InjectRepository(Upload) private readonly uploadRepository: Repository<Upload>,
        private readonly uploadToAwsProvider: UploadToAwsProvider,
        private readonly configService: ConfigService
    ) { }
    public async uploadFile(file: Express.Multer.File) {
        if (['image/gif', 'image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype)) {
            throw new BadRequestException('Mine type not supported')
        }

        try {
            const name = await this.uploadToAwsProvider.fileUpload(file);
            const uploadFile: UploadFile = {
                name: name,
                path: `https://${this.configService.get('appConfig.awsCloudfrontUrl')}/${name}`,
                type: fileTypes.IMAGE,
                mime: file.mimetype,
                size: file.size
            }

            const upload = this.uploadRepository.create(uploadFile);
            return await this.uploadRepository.save(upload)

        } catch (error) {
            throw new ConflictException(error)
        }
    }
}
