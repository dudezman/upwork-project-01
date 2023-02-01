import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';
@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit,AfterViewInit {
  data = [
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Uncomplete',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    },
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Low Risk',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    },
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Uncomplete',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    },
    {
      task:'Work Flow: Requires Location',
      from:'denisgordiyenya@gmail.com',
      to:'denisgordiyenya@gmail.com',
      status:'Needs Review',
      address:'2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: new Date('Oct 6 2023, 02:38 AM')
    }
  ]

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const myAPIKey = 'fcccdf8a978c42729e19d79a1e414e2e'; 
    const mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';

    const initialState = { lng: 11, lat: 49, zoom: 9 };

    const map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    map.addControl(new NavigationControl());
  }

}
