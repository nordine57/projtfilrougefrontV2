import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../authentification.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);



  ngOnInit(): void {

  }
}
