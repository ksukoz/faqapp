import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions:Question[];
  constructor() { 
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Jonathon',
        hide: true
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is violet ',
        hide: true
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is Javascript',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question:Question) {
    this.questions.unshift(question);
  }

  removeQuestion(question:Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);
      }
    }
  }


}
