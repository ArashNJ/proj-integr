import { Component } from '@angular/core';

import { processes } from '../processes';

@Component({
  selector: 'app-process',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  processes = processes;

  migrate() {
    window.alert('The data has successfully migrated!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/