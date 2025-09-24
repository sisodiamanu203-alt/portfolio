import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLettersFastComponent } from '../animated-letters-fast/animated-letters-fast';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AnimatedLettersFastComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {
  letterClass = 'text-animate-fast';
  nameArray = ['0', '1', '.', ' ', 'A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-fast-hover';
    }, 4000);
  }
}