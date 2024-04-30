import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";

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
        ReactiveFormsModule
    ],
  templateUrl: './entretien.component.html',
  styleUrl: './entretien.component.scss'
})
export class EntretienComponent {

}
