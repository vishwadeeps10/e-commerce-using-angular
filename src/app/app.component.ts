import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    // templateUrl: './app.component.html',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent,RouterLink]
})
export class AppComponent {

}
