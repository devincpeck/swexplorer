import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCell } from '@angular/material/table';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input() data: object[];
  @Output() selected = new EventEmitter<any>();
  displayedColumns = ['name'];

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(cell: MatCell): void {
    this.selected.emit(cell);
  }
}
