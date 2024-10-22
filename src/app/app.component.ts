import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputValue = signal<string>('');
  result = signal<number | null>(null);

  onSubmit() {
    try {
      // Simulate an error if input is not a valid number
      const numberValue = parseInt(this.inputValue());
      if (isNaN(numberValue)) {
        throw new Error('Invalid number input');
      }
      this.result.set(numberValue * 10);
    } catch (error) {
      throw error; // This will be caught by the GlobalErrorHandler
    }
  }
}