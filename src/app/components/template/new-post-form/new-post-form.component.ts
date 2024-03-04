import { Component } from '@angular/core';
import { Post } from './post-form-model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostServicesService } from '../../../services/post-services.service';
import { NewPostCardComponent } from '../new-post-card/new-post-card.component';
import { NewPostActionsComponent } from '../new-post-actions/new-post-actions.component';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrl: './new-post-form.component.css'
})
export class NewPostFormComponent {
  disable: boolean = true;
  post: Post = {
    user: '',
    title: '',
    postContent: ''
  }

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostFormComponent>,
    private postService: PostServicesService
    ){}

  cancel()
  {
    if(this.post.postContent != "")
    {
      this.dialog.open(NewPostActionsComponent);
    }
    else
    {
      this.dialogRef.close();
    }
  }

  publish()
  {
    this.postService.newPost(this.post).subscribe(() => {
      this.dialog.closeAll();
      this.postService.showMessage('Novo Post Adcionado', true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
  }

}