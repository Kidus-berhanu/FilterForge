import { FilterForge } from './search.pipe';

describe('FilterForge', () => {
  let pipe: FilterForge;

  beforeEach(() => {
    pipe = new FilterForge();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter by firstName', () => {
    const users = [
      { firstName: 'John', lastName: 'Doe', dept: 'IT', salary: 1000, doj: new Date() },
      { firstName: 'Jane', lastName: 'Doe', dept: 'HR', salary: 2000, doj: new Date() }
    ];
    const keyword = 'John';
    const filtered = pipe.transform(users, keyword);
    expect(filtered.length).toBe(1);
    expect(filtered[0].firstName).toContain(keyword);
  });

  it('should filter by lastName', () => {
    const users = [
      { firstName: 'John', lastName: 'Smith', dept: 'IT', salary: 1000, doj: new Date() },
      { firstName: 'Jane', lastName: 'Doe', dept: 'HR', salary: 2000, doj: new Date() }
    ];
    const keyword = 'Doe';
    const filtered = pipe.transform(users, keyword);
    expect(filtered.length).toBe(1);
    expect(filtered[0].lastName).toContain(keyword);
  });

  it('should filter by dept', () => {
    const users = [
      { firstName: 'John', lastName: 'Smith', dept: 'IT', salary: 1000, doj: new Date() },
      { firstName: 'Jane', lastName: 'Doe', dept: 'HR', salary: 2000, doj: new Date() }
    ];
    const keyword = 'HR';
    const filtered = pipe.transform(users, keyword);
    expect(filtered.length).toBe(1);
    expect(filtered[0].dept).toContain(keyword);
  });

  it('should return all users if keyword is empty', () => {
    const users = [
      { firstName: 'John', lastName: 'Smith', dept: 'IT', salary: 1000, doj: new Date() },
      { firstName: 'Jane', lastName: 'Doe', dept: 'HR', salary: 2000, doj: new Date() }
    ];
    const keyword = '';
    const filtered = pipe.transform(users, keyword);
    expect(filtered.length).toBe(users.length);
  });

  it('should return empty array if no matches found', () => {
    const users = [
      { firstName: 'John', lastName: 'Smith', dept: 'IT', salary: 1000, doj: new Date() },
      { firstName: 'Jane', lastName: 'Doe', dept: 'HR', salary: 2000, doj: new Date() }
    ];
    const keyword = 'Nonexistent';
    const filtered = pipe.transform(users, keyword);
    expect(filtered.length).toBe(0);
  });
});
