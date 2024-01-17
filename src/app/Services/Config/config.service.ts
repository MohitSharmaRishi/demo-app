import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  BaseUrl :string= "https://localhost:44369/"
  constructor() { }
}
