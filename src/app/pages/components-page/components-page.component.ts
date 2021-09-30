import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit {
  isChecked = true;

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];
  color = 2;

  categories = [
    { title: 'Movies', selected: false },
    { title: 'TV', selected: false },
    { title: 'Theatre/Drama', selected: false },
  ]

  minDate: Date = new Date();
  maxDate: Date = new Date();

  ngOnInit(): void {
    this.maxDate.setDate(this.minDate.getDate() + 7)
  }

  onChange($event: any) {
    console.log($event);
  }

  selectCategory(category: any) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false);
    category.selected = true;
  }
}
