import { Component, OnInit } from '@angular/core';
import { tableData } from './table-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {

  constructor() { }

  myTableData = tableData;
  
  table: any=[
    {
      walletNumber: '20330319174201011',
      amount: 'NGN 20,000.00',
      date: '13 mar, 2023',
      status:'Successful'
    },
    {
      walletNumber: '20330319174201012',
      amount: 'NGN 30,000.00',
      date: '14 mar, 2023',
      status:'Successful'
    },
    {
      walletNumber: '20330319174201013',
      amount: 'NGN 40,000.00',
      date: '19 mar, 2023',
      status:'failed'
    },
    {
      walletNumber: '20330319174201014',
      amount: 'NGN 10,000.00',
      date: '18 mar, 2023',
      status:'Successful'
    },
    {
      walletNumber: '20330319174201015',
      amount: 'NGN 50,000.00',
      date: '15 mar, 2023',
      status:'Successful'
    },
  ]

  

  rows =[
    {
      walletNumber: '20330319174201011',
      amount: 'NGN 20,000.00',
      date: '13 mar, 2023',
      status:'Successful'
    },
    {
      walletNumber: '20330319174201012',
      amount: 'NGN 30,000.00',
      date: '14 mar, 2023',
      status:'Successful'
    },
    {
      walletNumber: '20330319174201013',
      amount: 'NGN 40,000.00',
      date: '19 mar, 2023',
      status:'Successful'
    },
    {
      walletNumber: '20330319174201014',
      amount: 'NGN 10,000.00',
      date: '18 mar, 2023',
      status:'Successful'
    },
    {
      walletNumber: '20330319174201015',
      amount: 'NGN 50,000.00',
      date: '15 mar, 2023',
      status:'Successful'
    },
  ]

}
