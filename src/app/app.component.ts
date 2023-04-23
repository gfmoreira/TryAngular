import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TryAngular'
  labelDropdown = "Changing Dropdown Content After Clicking the Button"

  setNewValueToDropdown(): void{
    this.optionsDropdown = this.optionsButtonDefault
  }

  optionsButtonDefault = [  
    { id: 1, name: 'New Value 1' },  
    { id: 2, name: 'New Value 2' },  
    { id: 3, name: 'New Value 3' },  
    ];  

  optionsDropdown = [  
    { id: 1, name: 'Options 1' },  
  ];  

  // Button Childer
  buttonChangeValue = "Change Dropdown Value"
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
