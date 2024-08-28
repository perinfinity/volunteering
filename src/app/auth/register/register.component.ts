import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn,
   Validators, FormGroup, AbstractControlOptions, 
   ValidationErrors} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { User } from '../../models/user.model';
import { RegistrationService } from './service/registration.service';
import { debounceTime } from 'rxjs';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const password = c.get('password');
  const confirmPassword = c.get('confirmPassword');
  // Utiliser || pour vérifier si l'un ou l'autre est pristine
  if (password?.pristine || confirmPassword?.pristine) {
    return null;
  }
  // Vérifier si les mots de passe sont identiques
  if (password?.value === confirmPassword?.value) {
    return null;
  }
  return { 'match': true };
}

function ageValidator(control: AbstractControl): ValidationErrors | null {
  const birthDate = new Date(control.value);
  const today = new Date();
  const minAgeDate = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());

  return birthDate > minAgeDate ? { underage: true } : null;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  public registerForm!: FormGroup;
  public errorMsg!: string;
  public confirmationMsg! : string;

  private validationErrorsMessages = {
    required: 'Ce champ est requis',
    email: 'L\'E-Mail est invalide exemple d\'email "smak@gmail.com"',
    minlength: 'Minimum 4 caractères',
    maxlength: 'Maximum 20 caractères',
    rangeError: 'La note doit être entre 1 et 5',
    match: 'Les mots de passe ne correspondent pas'
  };

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      created_at: ['', [Validators.required, ageValidator]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      }, { validators: passwordMatcher }as AbstractControlOptions),
    
    });

    this.registerForm.get('email')?.valueChanges.pipe(debounceTime(1500)).subscribe(val => {
      this.setMessage(this.registerForm.get('email'));
    });
    
  }
 

  public saveData(): void {
    if (this.registerForm.valid) {
      this.registrationService.register(this.registerForm.value).subscribe({
        next: (response) =>{
           console.log('User registered successfully', response),
           this.confirmationMsg = 'Votre inscription a été réussie !';
          },
        error:(err) =>{
           console.error('Error registering user', err),
           this.confirmationMsg = ' Erreur lors de l\'inscription. Veuillez réessayer.';
           if (err.error) {
            console.log('Détails de l\'erreur :', err.error);
          }
        },
      });
    }
    console.log(this.registerForm);
    console.log('valeurs : ', JSON.stringify(this.registerForm.value));
  }

  private setMessage(control: AbstractControl | null): void {
    this.errorMsg = '';
    const validationMessages = this.validationErrorsMessages;
  
    // Vérifier le contrôle principal et les sous-contrôles
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach(key => {
        this.setMessage(control.get(key));
      });
    }
  
    if ((control?.touched || control?.dirty) && control?.errors) {
      this.errorMsg = Object.keys(control.errors).map(
        key => validationMessages[key as keyof typeof validationMessages]
      ).join(' ');
    }
  }
  
  
}