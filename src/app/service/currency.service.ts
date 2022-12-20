import { getCurrencySymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private selectedCurrency$: BehaviorSubject<string> =
    new BehaviorSubject<string>('NGN');
  constructor() {}

  getCurrencySymbol() {
    return this.selectedCurrency$.asObservable();
  }
  setCurrency(currency: string) {
    this.selectedCurrency$.next(currency);
  }
}
