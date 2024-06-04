import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../authentification.service";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-planning-resa',
  standalone: true,
  imports: [MatButton,
    RouterLink, RouterLinkActive],
  templateUrl: './planning-resa.component.html',
  styleUrl: './planning-resa.component.scss'
})
export class PlanningResaComponent implements OnInit {

  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);
  router = inject(Router);

  listeResa: any[] = [];

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/reservation/liste')
      .subscribe((listeResa) => (this.listeResa = listeResa));
    console.log(this.listeResa)
  }

  onPrendreResa(reservation: any): void {
    this.http.put(
      `http://localhost:8080/reservation/${reservation.idReservation}`,
      reservation  // Envoyer l'objet de réservation complet comme corps de la requête PUT
    )
      .subscribe(
        response => {
          console.log('Réservation mise à jour avec succès', response);
          // Actualiser la liste des réservations
          this.router.navigateByUrl('/planning');

        },
        error => {
          console.error('Erreur lors de la mise à jour de la réservation', error);
        }

      );
  }

}
