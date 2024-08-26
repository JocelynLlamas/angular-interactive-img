import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InteractiveImageComponent } from './interactive-image/interactive-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InteractiveImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interactive';
}
