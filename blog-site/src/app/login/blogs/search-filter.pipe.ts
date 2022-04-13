import { Pipe, PipeTransform } from '@angular/core';
import { Blogs } from './blogs.component';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Blogs[], filterText:string): Blogs[] {
    return list ? list.filter(blog => blog.title.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
