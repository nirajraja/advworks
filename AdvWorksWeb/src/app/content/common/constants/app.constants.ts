import { Injectable } from '@angular/core';
const HTTP_URL = "https://localhost:44313/api/";

@Injectable()
export class AppConstants {
  readonly baseURL: string = HTTP_URL;
}
