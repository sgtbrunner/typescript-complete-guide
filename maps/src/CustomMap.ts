/// <reference types="@types/google.maps" />

// instructions to every other class on
// how they can be an argument to "addMarker"
export interface Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}

export default class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
      title: mappable.name,
    });
  }
}
