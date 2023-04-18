import { Component, AfterViewInit } from '@angular/core';
declare var DDS: any;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent  {
  show : boolean = false

  showMessage(): void{
    this.show = !this.show
  }

  ngAfterViewInit(): void {
    const element = document.getElementById("simple-list-dropdown");
    new DDS.Dropdown(element);

  }

}
