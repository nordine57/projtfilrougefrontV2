import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {provideNativeDateAdapter} from "@angular/material/core";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-ajout-reservation',
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
  templateUrl: './ajout-reservation.component.html',
  styleUrl: './ajout-reservation.component.scss'
})
export class AjoutReservationComponent implements OnInit {




  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  authentification = inject(AuthentificationService);


  listeTache: any[] = [];
  selectedTache: any = null;

  formulaire: FormGroup = this.formBuilder.group({
    nomReservation: [this.authentification.utilisateur.nom, [Validators.required]],
    heureReservation: ['', [ Validators.required]],
    dateReservation: ['', [ Validators.required]],
    problemeVoiture: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/tache')
      .subscribe((listeTache) => (this.listeTache = listeTache));



  }


  onSubmit() {
    console.log(this.formulaire.value)
    if (this.formulaire.valid ) {
      console.log(this.selectedTache)
      const resa = this.formulaire.value;
      const heureR = resa.heureReservation;
      resa.heureReservation = this.convertToLocalTime(heureR);
      resa.tache = this.selectedTache;
      this.http
        .post('http://localhost:8080/reservation', resa)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/accueil');

    }
    }
  private convertToLocalTime(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    // Adjust for local time if necessary
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
  }

}
