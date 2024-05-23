import {Component, inject, OnInit} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";



@Component({
  selector: 'app-entretien',
  standalone: true,
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        MatOption,
        MatSelect,
        ReactiveFormsModule,
        FormsModule,
        MatError,
        MatIcon,
        MatIconButton,
        MatSuffix

    ],
  templateUrl: './entretien.component.html',
  styleUrl: './entretien.component.scss'
})
export class EntretienComponent implements OnInit {
  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  formulaire: FormGroup = this.formBuilder.group({
    plaqueVoiture: ['', [Validators.required]],
  });

  listeMarqueVoiture: any[] = [];
  listeModeleVoiture: any[] = [];
  listeModeleFiltre: any[] = [];



  selectedMarque: any = null;
  selectedModele: any = null;

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/marquevoiture')
      .subscribe((listeMarqueVoiture) => (this.listeMarqueVoiture = listeMarqueVoiture));
    this.http
      .get<any[]>('http://localhost:8080/modelevoiture')
      .subscribe((listeModeleVoiture) => (this.listeModeleVoiture = listeModeleVoiture));


  }

  onSelectionMarque(){
    this.listeModeleFiltre = this.listeModeleVoiture.filter(model => model.marqueVoiture.nomMarque == this.selectedMarque.nomMarque)
  }

  onSubmit() {
    console.log(this.formulaire);
    if (this.formulaire.valid) {

      const voiture = this.formulaire.value;
      voiture.idModeleVoiture = this.selectedModele

      this.http
        .post('http://localhost:8080/voiture', voiture)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/accueil');


    }
  }





}
