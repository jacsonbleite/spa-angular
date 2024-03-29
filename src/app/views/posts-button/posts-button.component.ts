import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-button',
  templateUrl: './posts-button.component.html',
  styleUrl: './posts-button.component.css'
})
export class PostsButtonComponent {

  liked = false;
  unliked = false;

  constructor(){}

  ngOinit():void{}

  like()
  {
    this.liked = !this.liked;
    this.unliked = false;
  }

  unlike()
  {
    this.unliked = !this.unliked;
    this.liked = false;
  }

}
