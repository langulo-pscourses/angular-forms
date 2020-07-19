import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';

// since it's provided in root, it doesnt have to be registered manually in
// app.module.ts
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingsForm(userSettings: UserSettings) {
    
  }
}
