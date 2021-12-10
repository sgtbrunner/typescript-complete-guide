import { name, address } from 'faker';

import { Mappable } from './CustomMap';

export default class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${name.firstName()} ${name.lastName()}`;
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <h2>User name: ${this.name}</h2>
    `;
  }
}
