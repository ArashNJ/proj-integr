export interface Process {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const processes = [
  {
    id: 1,
    name: 'Emp. Basic Data',
    price: 799,
    description: 'A salesman basic info'
  },
  {
    id: 2,
    name: 'Sold Products',
    price: 699,
    description: 'Sold products with customer ranking of respected salesman'
  },
  {
    id: 3,
    name: 'Performance Record',
    price: 299,
    description: 'Performance record of respected salesman'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/