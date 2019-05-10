import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DeviceService} from '../../../services/device.service';

@Component({
  selector: 'edit-transducer',
  templateUrl: 'edit-transducer.component.html',
  styleUrls: ['edit-transducer.component.scss']
})

export class EditTransducerComponent {
  originalName: string = "";
  name: string = "";
  unit: string = "";
  actuable: boolean = false;

  constructor(private router: Router, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,
              private deviceService: DeviceService, public dialogRef: MatDialogRef<EditTransducerComponent>) {

  }

  ngOnInit() {
    this.originalName = this.data.transducer.name;
    this.name = this.originalName;
    this.unit = this.data.transducer.unit;
    this.actuable = this.data.transducer.is_actuable;
  }

  denyDialog() {
    this.dialogRef.close(false);
  }

  submitEdit() {
    let body = Object();
    body.name = this.name;
    body.unit = this.unit;
    body.is_actuable = this.actuable;
    this.dialogRef.close(body);
  }
}
