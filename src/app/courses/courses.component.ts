import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';
import {AutoGrowDirective} from '../auto-grow.directive';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CoursesService],
  
})
export class CoursesComponent implements OnInit {
  title = "the title of the courses page";
  courses;
  
  constructor(coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

}
