/**
 * A generic pipe to filter list of objects
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * @items: list of objects
   * @field: pass in the object property name to apply the search on
   * @searchText: search criteria
   */
  transform( items: any[], field: string, searchText: string ): any[] {
    if( ! items ) return [];
    if( ! searchText ) return items;
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item[field].toLowerCase().includes(searchText);
    });
   }
}