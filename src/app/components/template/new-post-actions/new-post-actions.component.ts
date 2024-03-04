import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostServicesService } from '../../../services/post-services.service';

@Component({
  selector: 'app-new-post-actions',
  templateUrl: './new-post-actions.component.html',
  styleUrl: './new-post-actions.component.css'
})
export class NewPostActionsComponent {

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostActionsComponent>,
    private postService: PostServicesService
  ){}

  discard()
  {
    this.dialog.closeAll();
    this.postService.showMessage("Descartar alterações", false);
  }
  
  back()
  {
    this.dialogRef.close();
  }
}
