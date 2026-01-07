import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
isToggled = false

  toggle() {
    this.isToggled = !this.isToggled;
  }
}
