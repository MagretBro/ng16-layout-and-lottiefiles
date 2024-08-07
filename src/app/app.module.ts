import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LottieModule } from 'ngx-lottie';

import player from 'lottie-web';
import { FactsCardComponent } from './components/facts-card/facts-card.component';
import { NewsComponent } from './components/news/news.component';
import { EarnNowComponent } from './components/earn-now/earn-now.component';
import { HeaderComponent } from './components/header/header.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FactsCardComponent,
    NewsComponent,
    EarnNowComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
