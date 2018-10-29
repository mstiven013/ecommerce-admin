import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { GetUsersService } from '../../../../services/users/users.service';
import { MapErrorService } from '../../../../services/error/map-error.service';

@Component({
  selector: 'app-all-orders-page',
  templateUrl: './all-orders-page.component.html',
  styleUrls: ['../../account-tmp/account-tmp.component.scss']
})
export class AllOrdersPageComponent {
}