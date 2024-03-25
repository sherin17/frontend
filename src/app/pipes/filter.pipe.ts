// search.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe  implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.jobTitle.toLowerCase().includes(searchText) || 
             item.companyName.toLowerCase().includes(searchText);
      // Add more fields for search as needed
    });
  }
}
