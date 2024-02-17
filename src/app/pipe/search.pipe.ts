import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../app.component';

@Pipe({
  name: 'search',
  standalone: true
})
export class FilterForge implements PipeTransform {

  transform(users: User[] | null, keyword: string): User[] {
    if (!users || !keyword) {
      return users || [];
    }

    keyword = keyword.toLowerCase();

    return users.filter(user =>
      user.firstName.toLowerCase().includes(keyword) ||
      user.lastName.toLowerCase().includes(keyword) ||
      user.dept.toLowerCase().includes(keyword)
    );
  }

}
