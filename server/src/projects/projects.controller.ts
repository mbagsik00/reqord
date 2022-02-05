import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get()
  getProjects(): any {
    return 'list of projects'
  }
}
