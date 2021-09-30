import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private iconStatuses: any = [
    { status: 'default', color: 'white' },
    { status: 'online', color: 'lightgreen' },
    { status: 'away', color: 'orange' },
    { status: 'busy', color: 'red' },
    { status: 'offline', color: 'grey' },
  ];

  currentStatus: any = this.iconStatuses[1];

  constructor() { }

  ngOnInit(): void {
  }

  getIconColor() : string {
    if (!this.currentStatus.color)
      return this.iconStatuses[0].color;
    return this.currentStatus.color;
  }

}
