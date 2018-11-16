import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {
title = "the title of the Authors page";
authors;
  
  constructor(authorsService: AuthorsService) { 
    this.authors= authorsService.getAuthors();
  }
  ngOnInit() {
  }

}
