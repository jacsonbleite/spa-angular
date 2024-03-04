import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-info',
  templateUrl: './sidenav-info.component.html',
  styleUrl: './sidenav-info.component.css',
})
export class SidenavInfoComponent {
  @ViewChild(MatSidenav) drawer!: MatSidenav
}
