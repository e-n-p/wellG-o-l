import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../../shared/game-of-life.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  private service = inject(GameOfLifeService);
  lifeCycleCount$ = this.service.lifeCycleCount$;
}
