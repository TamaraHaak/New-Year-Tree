import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; // Импортируем NgFor отдельно

@Component({
  selector: 'app-christmas-card',
  standalone: true, // standalone-компонент
  imports: [NgFor], // Добавляем CommonModules
  templateUrl: './christmas-card.component.html',
  styleUrls: ['./christmas-card.component.scss']
})
export class ChristmasCardComponent implements OnInit {
  snowflakes = Array(300).fill(null); // 100 снежинок
  treeLayers = Array(10).fill(null).map((_, i) => ({ width: `${300 + i * 30}px` })); // 10 слоев елки
  decorations = Array(30).fill(null).map(() => ({
    color: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 5)],
    x: `${Math.random() * 90}%`,
    y: `${Math.random() * 90}%`
  }));
  fireworks = Array(5).fill(null); // 5 фейерверков

  trackBySnowflake(index: number): number {
    return index; // Возвращаем индекс как уникальный идентификатор
  }



  constructor() {}

  ngOnInit(): void {
    console.log(this.snowflakes);
  }

  generateTreeLayers() {
    const layers = [];
    for (let i = 0; i < 5; i++) {
      layers.push({ width: `${200 - i * 30}px` }); // Уменьшаем ширину слоя
    }
    return layers;
  }

  generateDecorations() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    return Array(20)
      .fill(null)
      .map(() => ({
        color: colors[Math.floor(Math.random() * colors.length)],
        x: Math.random() * 90 + '%', // Позиция по горизонтали
        y: Math.random() * 90 + '%', // Позиция по вертикали
      }));
  }
}

