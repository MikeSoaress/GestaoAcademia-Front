import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  isMobile(): boolean {
      return window.innerWidth < 768;
  }
}
