import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors(): string[]{
    return ["Ajay", "Rob", "Tariq"]
    
  }
  constructor() { }
}
