import { Component, Input, OnInit } from '@angular/core';
import { Icontatto } from 'src/app/interfaces/icontatto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input()lista!: Icontatto[];

  constructor() { }

  ngOnInit(): void {
  }

}
