import { Component } from '@angular/core';
import { Post } from './models/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyCoxzbp8q62fXwFCk3VJGkuAjQgDiY1xWE',
      authDomain: 'ocr-angular-activite-blog.firebaseapp.com',
      databaseURL: 'https://ocr-angular-activite-blog.firebaseio.com',
      projectId: 'ocr-angular-activite-blog',
      storageBucket: 'ocr-angular-activite-blog.appspot.com',
      messagingSenderId: '201756908988',
      appId: '1:201756908988:web:3a2b06cf05b3a1b69e1fb9'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
