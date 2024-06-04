import {Component, inject} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-voitureocca',
  standalone: true,
    imports: [
        MatButton,
        MatError,
        MatIcon,
        MatIconButton,
        MatInput,
        MatLabel,
        MatSuffix,
        ReactiveFormsModule,

    ],
  templateUrl: './ajout-voitureocca.component.html',
  styleUrl: './ajout-voitureocca.component.scss'
})
export class AjoutVoitureoccaComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  formulaire: FormGroup = this.formBuilder.group({
    nomVoitureOccasion: ['', [Validators.required]],
    prixVoitureOccasion: ['', [ Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });



  onInscription(): void {
    console.log(this.formulaire);
    if (this.formulaire.valid ) {
      this.http
        .post('http://localhost:8080/voitureoccasion', this.formulaire.value)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/accueil');

    }
  }

}
