import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<number>();
  search(text: any) {
    this.searchEvent.emit(text as number);
  }
}
