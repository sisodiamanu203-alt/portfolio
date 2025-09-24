import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimatedLettersComponent } from '../animated-letters/animated-letters'; 

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimatedLettersComponent], 
  templateUrl: './introduction.html',
  styleUrls: ['./introduction.css']
})
export class IntroductionComponent implements OnInit {
  letterClass = 'text-animate';
  nameArray = ['M', 'a', 'n', 'u', ','];
  jobArray = ['o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'n', 'e', 'r'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-hover';
    }, 4000);
  }
}