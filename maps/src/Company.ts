import { company, address } from 'faker';

import { Mappable } from './CustomMap';

export default class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>Company name: ${this.name}</h2>
        <h3>Mantra: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
