import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimatedLettersFastComponent } from '../animated-letters-fast/animated-letters-fast';

@Component({
  selector: 'app-touch',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimatedLettersFastComponent],
  templateUrl: './touch.html',
  styleUrls: ['./touch.css']
})
export class TouchComponent implements OnInit {
  letterClass = 'text-animate-fast';
  nameArray = ['G', 'e', 't', ' ', 'I', 'n', ' ', 'T', 'o', 'u', 'c', 'h'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-fast-hover';
    }, 4000);
  }
}