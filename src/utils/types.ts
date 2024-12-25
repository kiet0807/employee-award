export interface Employee {
  id: number;
  name: string;
  category: 'Business' | 'Technical';
  avatar: string;
}

export type EmployeeResponse = Employee[];
