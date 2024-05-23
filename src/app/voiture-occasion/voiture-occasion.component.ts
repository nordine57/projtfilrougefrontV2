import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LabelComponent } from "../label/label.component";
import {Router, RouterLink} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-voiture-occasion',
  standalone: true,
    imports: [MatCardModule, MatButtonModule, LabelComponent, RouterLink],
  templateUrl: './voiture-occasion.component.html',
  styleUrl: './voiture-occasion.component.scss'
})
export class VoitureOccasionComponent {
  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);
  router = inject(Router);

  listeVoitureOccasion: any[] = [];

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/voitureoccasion/liste')
      .subscribe((listeVoitureOccasion) => (this.listeVoitureOccasion = listeVoitureOccasion));
  }

  onSupprimerProduit(id: number): void {
    this.http
      .delete('http://localhost:8080/voitureoccasion/' + id)
      .subscribe((resultat) => console.log(resultat));
    this.router.navigateByUrl('/voitureoccasion');
  }



}
