import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLettersFastComponent } from '../animated-letters-fast/animated-letters-fast';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, AnimatedLettersFastComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements OnInit {
  letterClass = 'text-animate-fast';
  nameArray = ['0','2','.','E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-fast-hover';
    }, 4000);
  }
}