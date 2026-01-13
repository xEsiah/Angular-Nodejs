import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-film',
  standalone: false,
  templateUrl: './film.html',
  styleUrl: './film.scss',
})
export class FilmComponent {
  @ViewChild('lectureEnCours') lectureEnCours!: ElementRef;
  @Input() filmName: string = '';
  @Input() filmOnAir: string = 'En Blue Ray';
  @Input() filmAffiche: string = '';

  getOnAir(): string {
    return this.filmOnAir;
  }

  onWatchFilm(): void {
    this.lectureEnCours.nativeElement.style.display = 'inline';
  }
  onStopWatchFilm(): void {
    this.lectureEnCours.nativeElement.style.display = 'none';
  }
  ngAfterViewInit() {
    this.lectureEnCours.nativeElement.style.display = 'none';
  }
}
