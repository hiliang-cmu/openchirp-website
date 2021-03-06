import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {InfraService} from '../../../services/infraservice';

import {GlobalDataService} from '../../../services/global.data.service';
import {MatDialog} from '@angular/material';
import {Device} from '../../../models/device';
import {ViewConfigComponent} from '../../dialogs/view-config.component';

@Component({
  selector: 'infra-service-devicelist',
  templateUrl: './infraservice-devicelist.component.html',
  styleUrls: ['./infraservice-devicelist.component.scss']
})

export class InfraServiceDeviceListComponent implements OnInit {
  devices: Array<Device> = [];
  @Input() service: any = null;

  constructor(private route: ActivatedRoute, private infraService: InfraService, private router: Router, public dialog: MatDialog,
              private globalDataService: GlobalDataService) {

  }

  ngOnInit() {
    this.getDeviceList();
  }

  getDeviceList() {
    this.route.params.pipe(
      switchMap((params: Params) => this.infraService.getServiceDevices(params['id'])))
      .subscribe(
        result => {
          this.devices = result;
        },
        error => this.router.navigate(['/home/services'])
      );
  }

  gotoDevice(id: string) {
    this.router.navigate(['/home/device/', id]);
  }

  viewDeviceConfig(device: any) {
    const dialogRef = this.dialog.open(ViewConfigComponent, {width: '900px'});
    dialogRef.componentInstance.config = device.config;
    dialogRef.componentInstance.source = device.name;
  }

}
