import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TestItem } from './../interface/test-item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const testItems: TestItem[] = [
      { id: 11, associated_employee_id: 123, associated_location_id: 123, associated_customer_id: 123, company_name: "Fox Graphics", username: "FoxG", first_name: "Geoff", last_name: "Fox", address: "7915 Silverton Ave.,", address_2: "Suite 306,", zip_code: 92126, city: "San Diego", bill_address_different: false, phone_1_description: "work", phone_1_extension: "1-858-538-3858", small_note: "Not for production", note: "This is only test data. Not to be used for production" },
      { id: 12, associated_employee_id: 123, associated_location_id: 123, associated_customer_id: 123, company_name: "Fox Graphics", username: "FoxJ", first_name: "Joanna", last_name: "Fox", address: "7915 Silverton Ave.,", address_2: "Suite 306,", zip_code: 92126, city: "San Diego", bill_address_different: false, phone_1_description: "work", phone_1_extension: "1-858-538-3858", small_note: "Not for production", note: "This is only test data. Not to be used for production" },
    ];
    return { testItems };
  }

  // Overrides the genId method to ensure that a testItem always has an id.
  // If the testItems array is empty,
  // the method below returns the initial number (11).
  // if the testItems array is not empty, the method below returns the highest
  // testItem id + 1.
  genId(testItems: TestItem[]): number {
    return testItems.length > 0 ? Math.max(...testItems.map(testItem => testItem.id)) + 1 : 11;
  }
}
