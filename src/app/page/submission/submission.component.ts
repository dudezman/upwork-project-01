import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  data = [
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Uncomplete',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    },
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Uncomplete',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    },
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Uncomplete',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    },
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Uncomplete',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
