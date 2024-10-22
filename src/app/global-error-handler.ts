import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Global Error:', error);
    alert('An error occurred! Please check the console for details.');
  }
}
