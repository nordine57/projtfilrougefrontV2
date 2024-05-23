import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  formulaire: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]],
    prenom: ['', [ Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    motDePasse: ['', [Validators.required]],
  });

  afficheMotDePasse = false;
  afficheMotDePasseConfirme = false;

  confirmationMotDePasse: string = '';

  motDePasseDifferent: boolean = false;

  onInscription(): void {
    this.motDePasseDifferent =
      this.formulaire.get('motDePasse')?.value != this.confirmationMotDePasse;

    if (this.formulaire.valid && !this.motDePasseDifferent) {
      this.http
        .post('http://localhost:8080/inscription', this.formulaire.value)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/connexion');

    }
  }

  verifierMotDePasseIdentique() {
    if (
      this.formulaire.get('motDePasse')?.value == this.confirmationMotDePasse
    ) {
      this.motDePasseDifferent = false;
    }
  }
}
