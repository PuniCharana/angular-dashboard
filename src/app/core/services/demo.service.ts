import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  items = [];

  constructor() { }

  addItem(item: string) {
    this.items.push(item);
  }

  getItem(index): string {
    return this.items[index];
  }

  getItems(): string[] {
    return this.items;
  }
}
