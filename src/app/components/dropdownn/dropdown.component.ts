import { Component, AfterViewInit, Input } from '@angular/core';
declare var DDS: any;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent  {
  @Input() optionsDropdown: any
  @Input() label: string = ""
  @Input() helper: string = ""

  ngAfterViewInit(): void {
    const element = document.getElementById("simple-list-dropdown");
    new DDS.Dropdown(element);
  }
}
