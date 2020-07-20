import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// since it's provided in root, it doesnt have to be registered manually in
// app.module.ts
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // putsreq endpoint will expire, so replace with new to test later
    return this.http.post(
      'https://putsreq.com/AfZtOQ04AFSUN9StFgMD',
      userSettings
    );
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
