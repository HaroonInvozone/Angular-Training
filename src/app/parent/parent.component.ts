import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  name = "";
  title = '';
  favBooks = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];
  ngOnInit(): void {
    this.name = "yoyo";
  }
  onBookAdded(eventData: { title: string }) {
    this.favBooks = this.favBooks.concat({
      title: eventData.title,
    });
    console.warn(this.favBooks);
  }

}
