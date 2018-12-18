import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // Instanciation de mon model sous forme d'array.
  posts: Post[];

  constructor(private dataservice: DataserviceService) { }

  // Quand le component est appelé, la méthode ngOnInit() appelle la/les méthode(s) qui lui est/sont
  // attribuée(s) (Ici, seulement une méthode : getAllPost()).
  ngOnInit() {
    this.posts = this.getAllPost();
  }

  // Création de la méthode
  getAllPost() {
    return this.dataservice.getAllPost();
  }

}
