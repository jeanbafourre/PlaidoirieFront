import { Component, OnInit } from '@angular/core';

// "décorateur" qui permet de rajouter du comportement à la classe PieceComponant
@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})

// classe destinée à être exportée pour être utilisée dans l'application
export class PieceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
