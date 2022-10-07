import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() aim =10;
  @Input() counter: {name: string, id: number} | undefined
  @Output() countChange = new EventEmitter<number>();
  count = 0
  //Változó létrehozása egy HTMl elemre (a neve 'btn' a html-ben '#btn'):
  @ViewChild('btn') buttonRef: ElementRef<HTMLButtonElement> | undefined;
  
  constructor() { 
    console.log('ctr');
  }
  ngOnInit(): void {
    console.log('on init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }
  ngAfterViewInit(): void {
    console.log('After view Init');
    this.buttonRef!.nativeElement.textContent = 'Számláló növelése (TS)'; //! mi biztos tudjuk, hogy a változó már inicializálva van.
  }
  ngOnDestroy(): void {
    console.log('on Destroy');
  }

  incrementCounter() {
    this.count++;
    this.countChange.emit(this.count);
  }
  
  get isComplete() {
    return this.count >= this.aim; //html-ben használjuk ezt a gettert.
  }
}
