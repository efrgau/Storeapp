import { Component, signal } from '@angular/core';
import { CounterComponent } from './../../../shared/components/counter/counter.component';
import { WaveAudioComponent  } from './../../../info/components/wave-audio/wave-audio.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, CommonModule,WaveAudioComponent,HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Mensaje temp');

  changeDuration(event:Event){
    const input = event.target as HTMLInputElement;

    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event:Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
