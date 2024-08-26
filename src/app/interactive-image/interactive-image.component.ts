import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive-image',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './interactive-image.component.html',
  styleUrls: ['./interactive-image.component.css']
})
export class InteractiveImageComponent {
  hoverInfo: string | null = null;
  hoverPosition = { top: '0px', left: '0px' };

  showInfo(event: MouseEvent, info: string): void {
    this.hoverInfo = info;
    this.hoverPosition = {
      top: `${event.clientY + 10}px`,
      left: `${event.clientX + 10}px`
    };
  }

  hideInfo(): void {
    this.hoverInfo = null;
  }
}
