import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-letters-fast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-letters-fast.html',
  styleUrls: ['./animated-letters-fast.css']
})
export class AnimatedLettersFastComponent {
  @Input() letterClass = '';
  @Input() strArray: string[] = [];
  @Input() idx = 0;
}