import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() character: string = '';

  @Input() operation: string = '';

  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick() {
    this.buttonClick.emit(this.operation);  // Emite un evento cuando el botón es clickeado
  }

}
