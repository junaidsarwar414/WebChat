import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
})
export class ThreadComponent implements OnInit {

  avatarUrl = "https://randomuser.me/api/portraits/men/41.jpg";
  constructor() { }

  ngOnInit() {
  }

}
