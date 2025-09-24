import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimatedLettersComponent } from '../../components/animated-letters/animated-letters';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimatedLettersComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {
  letterClass = 'text-animate';
  nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.letterClass = 'text-animate-hover';
    }, 4000);
  }

  sendEmail(e: Event): void {
    e.preventDefault(); 

    const form = e.target as HTMLFormElement;

    emailjs.sendForm('service_5f8lyfm', 'template_8vhn0tm', form, 'v2mm-8nIUQSzEOQPD')
      .then(() => {
        window.alert('Mail Sent Successfully!!!');
        form.reset();
      }, (error) => {
        window.alert('Mail Not Sent!!!');
      });
  }
}