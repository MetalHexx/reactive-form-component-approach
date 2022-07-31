export interface Example {
  user: User;
  company: Company;
}

export interface Address {
  street: string;
  zip: string;
}

export interface Phone {
  number: string,
  type: PhoneType
}

export enum PhoneType {
  Home,
  Mobile,
  Work
}

export interface User {
  firstName: string;
  lastName: string;
  addresses: Address[];
  phoneNumbers: Phone[];
}

export interface Company {
  name: string;
  address: Address;
}
