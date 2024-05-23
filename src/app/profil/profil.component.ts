import { Component, inject } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import {Router, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [RouterLink,MatIcon],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);
  router: Router = inject(Router);


}
