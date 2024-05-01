import { Component, OnInit, inject } from '@angular/core';
import { GameOfLifeService } from '../../game-of-life.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-displaygrid',
  templateUrl: './displaygrid.component.html',
  styleUrl: './displaygrid.component.css'
})
export class DisplayGridComponent implements OnInit{

  gridService = inject(GameOfLifeService);

  gridRepresentation$: Observable<number[][]> = this.gridService.getGrid$();

  constructor(){
  }

  ngOnInit(): void {
  }

}
