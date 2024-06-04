import {Component, inject, OnInit} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatFormFieldModule, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-ajout-utilisateur',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButton,
    MatError,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule, FormsModule, MatOption, MatSelect,
  ],
  templateUrl: './ajout-utilisateur.component.html',
  styleUrl: './ajout-utilisateur.component.scss'
})
export class AjoutUtilisateurComponent implements OnInit {

  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  listeRole: any[] = [];
  selectedRole: any = null;

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

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/role')
      .subscribe((listeRole) => (this.listeRole = listeRole));


  }

  onInscription(): void {
    this.motDePasseDifferent =
      this.formulaire.get('motDePasse')?.value != this.confirmationMotDePasse;



    if (this.formulaire.valid && !this.motDePasseDifferent) {
      const resa = this.formulaire.value;
      resa.role = this.selectedRole;

      this.http
        .post('http://localhost:8080/inscriptionadmin', resa)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/liste-client');

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
