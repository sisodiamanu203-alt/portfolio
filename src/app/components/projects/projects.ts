import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLettersFastComponent } from '../animated-letters-fast/animated-letters-fast';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AnimatedLettersFastComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  letterClass = 'text-animate-fast';
  nameArray = ['0', '3', '.', ' ', 'M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-fast-hover';
    }, 4000);
  }

  
}