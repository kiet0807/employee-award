import { EmployeeResponse } from '@/utils/types';

import axiosInstance from './axiosInstance';

export const getEmployees = async (): Promise<EmployeeResponse> => {
  try {
    const response = await axiosInstance.get('/employees');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    throw error;
  }
};
