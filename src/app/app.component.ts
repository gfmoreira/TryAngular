import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TryAngular'
  labelDropdown = "Changing Dropdown Content After Clicking the Button"
  status: string = 'loading';
  data!: any[];
  
  private url: string = 'http://localhost:8080/users';

  setNewValueToDropdown(): void{
    this.optionsDropdown = this.data
  }
  
  async ngOnInit(): Promise<void>  {
    fetch(await this.url)
    .then((response) => response.json())
    .then((quotesData) => {
      this.status = 'ready';
      this.data = quotesData.users;
    })
    .catch((error) => {
      this.status = 'error';
      console.error('There was an error!', error);
    });
  }

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
