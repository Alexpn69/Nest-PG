import { Controller, Get, Param, Query } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Log } from './model/log.model';
import { PaginationDto } from './dto/pagination.dto';

@Controller('api/logs')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @ApiOperation({ summary: 'Show list of Logs' })
  @ApiResponse({ status: 200, type: [Log] })
  @Get()
  getAllLogs() {
    return this.loggerService.getAllLogs();
  }

  @ApiOperation({ summary: 'Show all logs about particular user' })
  @ApiResponse({ status: 200, type: [Log] })
  @Get('/:id')
  getLogByUserId(
    @Param('id') id: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.loggerService.getLogByUserId(
      id,
      paginationDto.page,
      paginationDto.pageSize,
    );
  }
}
