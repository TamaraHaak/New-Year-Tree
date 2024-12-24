import { Component } from '@angular/core';
import { ChristmasCardComponent } from './christmas-card/christmas-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChristmasCardComponent], // Подключаем компонент
  template: '<app-christmas-card></app-christmas-card>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
