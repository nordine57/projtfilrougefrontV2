import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatInput, MatLabel} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-tache',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './ajout-tache.component.html',
  styleUrl: './ajout-tache.component.scss'
})
export class AjoutTacheComponent {

  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  formulaire: FormGroup = this.formBuilder.group({
    nomTache: ['', [Validators.required]],
    dureeTache: ['', [ Validators.required]],

  });



  onInscription(): void {
    console.log(this.formulaire);
    if (this.formulaire.valid ) {
      this.http
        .post('http://localhost:8080/tache', this.formulaire.value)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/accueil');

    }
  }

}
