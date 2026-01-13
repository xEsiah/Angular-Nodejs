import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-film',
  standalone: false,
  templateUrl: './film.html',
  styleUrl: './film.scss',
})
export class FilmComponent implements OnInit {
  @ViewChild('lectureEnCours') lectureEnCours!: ElementRef;
  @Input() filmName: string = '';
  @Input() filmOnAir: boolean = false;
  @Input() filmAffiche: string = '';

  constructor() {}
  ngOnInit() {}

  getOnAir(): string {
    if (this.filmOnAir) return 'En salles !';
    else return 'En Blue-Ray';
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
  changeColor(): string {
    return this.filmOnAir ? 'purple' : 'red';
  }
}
