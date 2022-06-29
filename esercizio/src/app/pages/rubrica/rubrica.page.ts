import { Component, OnInit } from '@angular/core';
import { Icontatto } from 'src/app/interfaces/icontatto';

@Component({
  templateUrl: './rubrica.page.html',
  styleUrls: ['./rubrica.page.scss']
})
export class RubricaPage implements OnInit {

  dettagli: boolean = false;
  lista: Icontatto[] = [
    {name: 'john',cognome:'verdi',city:'San Francisco',phone:'123',email:'john@gmail.com'}
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
