import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app';
import { FilmComponent } from './film/film';
import { FormsModule } from '@angular/forms';

import { FilmService } from './services/film/film-service';

@NgModule({
  declarations: [AppComponent, FilmComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), FilmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
