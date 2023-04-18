import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show : boolean = false
  title = 'TryAngular'

  showMessage(): void{
    this.show = !this.show
  }

  // Button Childer
  buttonDefault = "Default"
  buttonDestructive = "Destructive"
  buttonTransactional = "Transactional"
  buttonEditorial = "Editorial"
  buttonEditorialLight = "Editorial Light"

  // Color of Buttons
  destructive = "dds__button--destructive"
  transactional = "dds__button--transactional"
  editorial = "dds__button--editorial"
  editorialLight = "dds__button--editorial-light"
  
}
