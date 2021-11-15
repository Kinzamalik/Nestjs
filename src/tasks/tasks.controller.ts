import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task-dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  // first method
  // @Post()
  // createAllTasks(@Body() body){
  //     console.log('body',body)
  // }

  // second method

  // @Post()
  // createTask(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ):Task {
   
  //   return this.tasksService.createTask(title,description);
  // }

  @Post()
 createTasks(@Body() createTaskDto:CreateTaskDto): Task{

  return this.tasksService.createTask(createTaskDto)
    
  }



  






}

function description(title: string, description: any): Task {
  throw new Error('Function not implemented.');
}

