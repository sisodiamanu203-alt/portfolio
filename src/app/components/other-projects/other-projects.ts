import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLettersFastComponent } from '../animated-letters-fast/animated-letters-fast';

@Component({
  selector: 'app-other-projects',
  standalone: true,
  imports: [CommonModule, AnimatedLettersFastComponent],
  templateUrl: './other-projects.html',
  styleUrls: ['./other-projects.css']
})
export class OtherProjectsComponent implements OnInit {
  letterClass = 'text-animate-fast';
  nameArray = ['0','4','.','C', 'o', 'd', 'i', 'n', 'g', ' ', 'P', 'r', 'o', 'f', 'i', 'l', 'e', 's'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-fast-hover';
    }, 4000);
  }
}