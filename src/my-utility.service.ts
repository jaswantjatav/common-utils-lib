import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MyUtilityService {
  private readonly logger = new Logger('CustomPackage');

  logSuccess(message: string) {
    this.logger.log(`[🚀 JFrog Package Success]: ${message}`);
    return { status: 'success', data: message };
  }
}