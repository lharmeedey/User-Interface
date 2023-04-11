import { Component, OnInit } from '@angular/core';
// import * as L from 'leaflet';


@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {

  constructor() {
   
   }

  ngOnInit(): void{
  //   const map = L.map('map').setView([9.05785, 7.49508], 7);

  //   // Add a tile layer to the map
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '© OpenStreetMap contributors'
  //   }).addTo(map);
    
  //   // Add a marker to represent Nigeria
  //   L.marker([9.05785, 7.49508]).addTo(map)
  //       .bindPopup('Nigeria')
  //       .openPopup();
   }


}
