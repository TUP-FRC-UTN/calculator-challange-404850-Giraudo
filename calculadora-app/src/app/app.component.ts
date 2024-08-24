import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { ButtonComponent } from './button/button.component';
import { NumberInputComponent } from './number-input/number-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, NumberInputComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-app';

  values: { [key: number]: number | null } = {};
  result: number | null = null;
  operator: string = '';

  handleValueChange(value: number | null, index: number) {
    this.values[index] = value;
    this.performCalculation();
  }

  performCalculation() {
    if (this.values[1] !== null && this.values[2] !== null) {
      // Realiza tu cálculo aquí. Ejemplo de suma:
      switch (this.operator) {
        case "sum":
          this.result = (this.values[1] || 0) + (this.values[2] || 0);
          break;
        case "sub":
          this.result = (this.values[1] || 0) - (this.values[2] || 0);
          break;
        case "mult":
        this.result = (this.values[1] || 0) * (this.values[2] || 0);
        break;
        case "div":
        this.result = (this.values[1] || 0) / (this.values[2] || 0);
        break;
        case "exp":
        this.result = (this.values[1] || 0) ** (this.values[2] || 0);
        break;
        case "cl":
          this.result = 0;
          break;
      
        default:
          break;
      }
    }
  }
}
