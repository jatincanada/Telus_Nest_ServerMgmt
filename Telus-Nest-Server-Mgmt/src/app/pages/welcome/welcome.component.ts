import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/Models/testdata';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  constructor() { }

  
  ngOnInit() {

    
    let listOfData: any ;
    listOfData = [
      {
        key: 'test',
        name: 'test',
        age: 32,
        address: 'test'
      },
      {
        key: 'test',
        name: 'test',
        age: 32,
        address: 'test'
      },
      {
        key: 'test',
        name: 'test',
        age: 32,
        address: 'test'
      },
      {
        key: 'test',
        name: 'test',
        age: 32,
        address: 'test'
      },
      {
        key: 'test',
        name: 'test',
        age: 32,
        address: 'test'
      },
      {
        key: 'test',
        name: 'test',
        age: 32,
        address: 'test'
      },
     ];

    
  }

}
