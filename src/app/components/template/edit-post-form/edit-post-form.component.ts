import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../new-post-form/post-form-model';
import { PostServicesService } from '../../../services/post-services.service';

@Component({
  selector: 'app-edit-post-card',
  templateUrl: './edit-post-form.component.html',
  styleUrl: './edit-post-form.component.css'
})
export class EditPostFormComponent {


  disable: boolean = true;
  postCopy: Post = {
    user: '',
    title: '',
    postContent: ''
  }

  // constructor(private dialog: MatDialog){}
  constructor(
    public dialogRef: MatDialogRef<EditPostFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { post: Post},
    private dialog: MatDialog,
    private postService: PostServicesService
  ) { }

  ngOnInit(): void {
    this.postCopy.user = this.data.post.user;
    this.postCopy.title = this.data.post.title;
    this.postCopy.postContent = this.data.post.postContent;
  }

  cancel(): void {
    this.data.post.user = this.postCopy.user;
    this.data.post.title = this.postCopy.title;
    this.data.post.postContent = this.postCopy.postContent;

    this.dialogRef.close();
  }
  
  update()
  {
    this.postService.updatePost(this.data.post).subscribe(() => {
      this.dialog.closeAll();
      this.postService.showMessage('Post Editado', true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
  }

}
