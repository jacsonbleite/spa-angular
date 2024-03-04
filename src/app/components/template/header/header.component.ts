import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent {

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void { }

	about()
	{
		this.dialog.open(AboutComponent);
	}

}
