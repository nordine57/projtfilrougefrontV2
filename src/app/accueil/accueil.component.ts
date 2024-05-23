import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LabelComponent } from '../label/label.component';
import { RouterLink } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
  imports: [MatCardModule, MatButtonModule, LabelComponent, RouterLink],
})
export class AccueilComponent implements OnInit {
  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);



  ngOnInit(): void {

  }

  onCatalogue(): void {

  }
}
