import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css'],
})
export class CadeauListComponent implements OnInit {
  @Input() cadeauList:any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
