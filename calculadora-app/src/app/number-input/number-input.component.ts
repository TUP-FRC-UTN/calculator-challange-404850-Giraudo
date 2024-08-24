import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css'
})
export class NumberInputComponent {
  @Input() title: string = '';

  inputValue: number = 1;  // Almacena el valor del input

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();  // Define el EventEmitter

  onValueChange() {
    this.valueChange.emit(this.inputValue);  // Emite el valor al componente padre
  }

}
