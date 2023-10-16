import { ApiProperty } from '@nestjs/swagger';

export class CreateLogDto {
  @ApiProperty({ example: 'Update', description: 'action which log descrides' })
  readonly action: string;
  @ApiProperty({
    example: '3',
    description: 'if of user that was created or updated',
  })
  readonly userId: number;
}
