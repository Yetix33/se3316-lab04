import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses;
  constructor() { 
    this.courses = ["Science", "Math", "Business"];
  }
  
  getCourses(): string[]{
    return this.courses;
  }
  
  onSave(item: string): void{
    this.courses.push(item.toString());
    return;
  }
  
}
