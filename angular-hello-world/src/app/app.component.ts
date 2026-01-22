import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponentComponent } from './hello-world-component/hello-world-component.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HelloWorldComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hello-world';
}
