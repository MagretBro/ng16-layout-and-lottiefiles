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
      path: 'assets/animation-04a996ff5728fbe9.lottie',
      renderer: 'canvas',
      autoplay: 'true',
      loop: 'true'
    };
  }

}
