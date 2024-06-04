import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../authentification.service";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-edit-profil',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './edit-profil.component.html',
  styleUrl: './edit-profil.component.scss'
})
export class EditProfilComponent implements OnInit {
  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);
  formBuilder: FormBuilder = inject(FormBuilder);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  formulaire: FormGroup = this.formBuilder.group({
    email: [this.authentification.utilisateur.sub, [Validators.required]],
    nom: [this.authentification.utilisateur.nom, [Validators.required]],
    prenom: [this.authentification.utilisateur.prenom, [Validators.required]],
  });

  idUser: number = this.authentification.utilisateur.id;

  ngOnInit(): void {
    console.log(this.idUser);

  }

  onSubmit() {
    console.log(this.idUser);
    if (this.formulaire.valid) {
      if (this.idUser) {
        this.http
          .put(
            'http://localhost:8080/utilisateur/' + this.idUser,
            this.formulaire.value
          )
          .subscribe((resultat) => this.router.navigateByUrl('/accueil'));
      } else {
        this.http
          .post('http://localhost:8080/utilisateur', this.formulaire.value)
          .subscribe((resultat) => this.router.navigateByUrl('/accueil'));
      }

      //note : solution dans le cas ou l'on utilise la methode POST pour l'ajout et la modification dans le back
      // const produit = { ...this.formulaire.value, id: this.idProduit };
      // this.http
      //   .post('http://localhost:8080/produit', produit)
      //   .subscribe((resultat) => console.log(resultat));
    }
  }
}
