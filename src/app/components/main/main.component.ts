import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  lottieConfig: Object;

  constructor() {
    this.lottieConfig = {
      path: 'assets/animation-04a996ff5728fbe9.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }


  public data = [
    { lastPrice: '40000', change: '+0.50%', lowHigh: '39000/41000', volume: '1000 BTC' },
    { lastPrice: '35000', change: '-4.30%', lowHigh: '34000/36000', volume: '900 BTC' },
    { lastPrice: '35000', change: '-1.16%', lowHigh: '34000/36000', volume: '900 BTC' },
    { lastPrice: '35000', change: '+4.84%', lowHigh: '34000/36000', volume: '900 BTC' },

 
    // Добавьте больше данных по необходимости
  ];

  getChangeClass(change: string): string {
    if (change.startsWith('+')) {
      return 'change-positive';
    } else if (change.startsWith('-')) {
      return 'change-negative';
    } else {
      return '';
    }
  }

}
