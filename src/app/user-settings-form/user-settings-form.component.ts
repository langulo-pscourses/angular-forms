import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'sample notes',
  };

  userSettings = { ...this.originalUserSettings };
  error = false;
  errorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // use observables to simulate getting the types via an http request
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  // blur handler (event for when a field loses focus)
  onBlur(field: NgModel): void {
    console.log('in onBlur: ', field.valid);
  }

  // submit handler for the form
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        (result) => console.log('success: ', result),
        (error) => this.handleError(error)
      );
    } else {
      this.handleError({
        message: 'Please fix the above errors before submitting',
      });
    }
  }

  handleError(error: any): void {
    console.log(error);
    this.error = true;
    this.errorMessage = error.message;
    setTimeout(() => {
      this.error = false;
      this.errorMessage = '';
    }, 3000);
  }
}
