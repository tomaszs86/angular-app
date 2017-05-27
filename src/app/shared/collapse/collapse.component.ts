import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {

  private visible: boolean = true;

  public toggleContent() {
    this.visible = !this.visible;
  }

}
