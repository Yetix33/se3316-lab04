import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(): string[]{
    return ["Science", "Math", "Business"]
    
  }


  constructor() { }
}
