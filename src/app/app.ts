import { Component, inject, signal } from '@angular/core';
import { FilmService } from './services/film/film-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class AppComponent {
  private _Film = inject(FilmService);
  films = [
    {
      title: 'Jurissic Park',
      onAir: false,
      filmAffiche: 'https://m.media-amazon.com/images/I/71NCcyIsWwL._AC_UF350,350_QL80_.jpg',
    },
    {
      title: 'Star Wars',
      onAir: false,
      filmAffiche: 'starwars.jpg',
    },
    {
      title: 'Dune',
      onAir: true,
      filmAffiche:
        'https://static.posters.cz/image/1300/affiches-et-posters/dune-partie-1-i122815.jpg',
    },
  ];
}
