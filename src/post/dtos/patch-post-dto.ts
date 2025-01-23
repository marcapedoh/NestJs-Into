//import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreatePostDto } from "./create-post.dtos";

export class PatchPostDto extends PartialType(CreatePostDto) {
    @ApiProperty({
        description: "The id of the post that needs to be updated"
    })
    @IsInt()
    @IsNotEmpty()
    id: number;
}