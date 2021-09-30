import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {

  // Issue where its forgetting itself? Seems to flip while idle?
  isDarkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode($event: MouseEvent) {
    // prevents other events from triggering, 
    // like keeping the parent menu, that the switch is in, from closing.
    // ^^ example of a integration test ^^
    $event.stopPropagation();
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode)
      console.log("DARK MODE! YEAAA!");
  }

}
