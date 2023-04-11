import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GooglemapComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  // display: any;
  // center: google.maps.LatLngLiteral = {
  //     lat: 9.0778,
  //     lng: 8.6775
  // };
  // zoom = 4;
  // moveMap(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.center = (event.latLng.toJSON());
  // }
  // move(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.display = event.latLng.toJSON();
  // }
}