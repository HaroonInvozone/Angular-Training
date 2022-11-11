import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent{

  bookTitle:string ="";

  @Input() name: string = "";
  @Output() bookTitleCreated = new EventEmitter<{ title: string }>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onAddTitle(value: string) {
    this.bookTitle = value;
    this.bookTitleCreated.emit({ title: this.bookTitle });
  }
}
