import { Component, OnInit, inject } from '@angular/core';
import { GameOfLifeService } from '../game-of-life.service';

@Component({
  selector: 'app-displaygrid',
  templateUrl: './displaygrid.component.html',
  styleUrl: './displaygrid.component.css'
})
export class DisplayGridComponent implements OnInit{

  gridService = inject(GameOfLifeService);
  gridRepresentation: number[][]= [];
  constructor(){
  }

  ngOnInit(): void {
    console.log(this.gridService.printGrid());
    this.gridRepresentation = this.gridService.printGrid();
  }




}
