import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    //@Type(() => Number) we do not need this anymore cause we already enabled the implicit conversion in the main.ts
    limit?: number = 10;
    @IsOptional()
    @IsPositive()
    //@Type(() => Number)
    page?: number = 1;
}