import { Component } from '@angular/core';
import { PostServicesService } from '../../services/post-services.service';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../components/template/new-post-form/post-form-model';
import { EditPostFormComponent } from '../../components/template/edit-post-form/edit-post-form.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts!: Post[];

  constructor(
    private postService: PostServicesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((post) => {
      this.posts = post;
    })
  }

  delete(post: Post) {
    this.postService.deletePost(`${post.id}`).subscribe(() => {
      this.postService.showMessage('Post deletado', true);
      this.ngOnInit();
    })
  }


  update(post: Post): void {
    const postCopy = post;
    const dialogRef = this.dialog.open(EditPostFormComponent, {
      data: { post: post }
    });
  }

}
