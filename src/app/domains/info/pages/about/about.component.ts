import { Component, signal } from '@angular/core';
import { CounterComponent } from './../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Mensaje temp');

}
