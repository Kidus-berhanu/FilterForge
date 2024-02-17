import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';



import { FilterForge } from "./pipe/search.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MatTableModule, FormsModule, FilterForge]
})
export class AppComponent {
  title = 'User Details';
  search: string = '';
  users: User[] = [
    {
      firstName: 'Jakie',
      lastName: 'Chan',
      dept: 'IT',
      salary: 5000,
      doj: new Date('2012-11-11')
    },
    {
      firstName: 'Tom',
      lastName: 'Cruise',
      dept: 'Marketing',
      salary: 8000,
      doj: new Date('2009-09-09')
    },
    {
      firstName: 'Robert',
      lastName: 'Downey',
      dept: 'Robotics',
      salary: 10000,
      doj: new Date('2002-11-21')
    },

    {
      firstName: 'Chris',
      lastName: 'Hemsworth',
      dept: 'Management',
      salary: 10000,
      doj: new Date('2002-11-21')
    },

    {
      firstName: 'Chris',
      lastName: 'Evans',
      dept: 'Engineering',
      salary: 10000,
      doj: new Date('2002-11-21')
    }

  ];
  dataSource = this.users;
  displayedColumns: string[] = ['firstName', 'lastName', 'dept', 'salary', 'doj'];
}

export interface User {
  firstName: string;
  lastName: string;
  dept: string;
  salary: number;
  doj: Date;
}
