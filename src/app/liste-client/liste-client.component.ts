import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from '../authentification.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-client',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent implements OnInit {

  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);
  router = inject(Router);

  listeUtilisateur: any[] = [];

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/utilisateur/liste')
      .subscribe((listeUtilisateur) => (this.listeUtilisateur = listeUtilisateur));
  }

  trackById(index: number, utilisateur: any): number {
    return utilisateur.idUser;
  }
}
