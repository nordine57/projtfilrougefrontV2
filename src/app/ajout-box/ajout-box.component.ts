import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatFormField, MatFormFieldModule, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";
import {provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-ajout-box',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule,
  ],
  templateUrl: './ajout-box.component.html',
  styleUrl: './ajout-box.component.scss'
})
export class AjoutBoxComponent implements OnInit {

  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  authentification = inject(AuthentificationService);


  listeTache: any[] = [];
  selectedTache: any = null;
  listeBox: any[] = [];
  selectedBox: any = null;

  formulaire: FormGroup = this.formBuilder.group({
    nomReservation: [this.authentification.utilisateur.nom, [Validators.required]],
    heureReservation: ['', [ Validators.required]],
    dateReservation: ['', [ Validators.required]],
    problemeVoiture: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/box')
      .subscribe((listeBox) => (this.listeBox = listeBox));
    this.http
      .get<any[]>('http://localhost:8080/tache')
      .subscribe((listeTache) => (this.listeTache = listeTache));


  }


  onSubmit() {
    console.log(this.formulaire.value)
    if (this.formulaire.valid) {
      console.log(this.selectedBox)
      const resa = this.formulaire.value;
      resa.tache = this.selectedTache;
      resa.box = this.selectedBox;
      this.http
        .post('http://localhost:8080/reservation', resa)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/accueil');

    }
  }

}
