import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  // blur handler (event for when a field loses focus)
  onBlur(field: NgModel): void {
    console.log('in onBlur: ', field.valid);
  }

  // submit handler for the form
  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.valid);
    // observables require a subscription to do anything
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      (result) => console.log('success: ', result),
      (error) => console.log('error: ', error)
    );
  }
}
