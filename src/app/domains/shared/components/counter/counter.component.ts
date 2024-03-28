import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';

  constructor(){
    // NO ASYNC
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChange(changes:SimpleChanges){
    //before and during render
    console.log('ngOnChange');
    console.log('-'.repeat(10));
    console.log(changes);
  }


}
