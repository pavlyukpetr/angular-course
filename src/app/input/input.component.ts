import {Component, Directive, Input, Output, EventEmitter, ElementRef} from '@angular/core';


@Directive({
  selector: 'input[log-directive]',
  host: {
    '(input)': 'onInput($event)'
  }
})
export class LogDirective {

  private _elRef: ElementRef;

  constructor(_elRef: ElementRef) {
    this._elRef = _elRef
    console.log(this._elRef.nativeElement)
  }

  public onInput(ev: KeyboardEvent) {
    let el = event.target as HTMLInputElement;
    console.log(`from derective ${el.value}`);
  }
}

@Component({
  selector: 'course-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  public isLogged: boolean = true;
  public width: number = 200;

  public accounts = [
    {id: 3, name: 'Igor'},
    {id: 2, name: 'Vova'},
    {id: 1, name: 'Mike'},
    {id: 4, name: 'Tanya'},
    {id: 5, name: 'Ola'},
  ];
  public tab = 1;


  @Input()
  public value: string;

  @Output()
  public myCustomEvent: EventEmitter<string> = new EventEmitter();

  public emit(ev: MouseEvent) {
    let el = ev.target as HTMLInputElement;
    this.myCustomEvent.emit(el.value);
  }



  /** обсудить!!!!!!  + ng-bind*/

  public trackFn(index, item): any {
    console.log(index, item)
    return item.id
  }

}
