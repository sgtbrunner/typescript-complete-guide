import { name, address } from 'faker';

export default class User {
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
}
