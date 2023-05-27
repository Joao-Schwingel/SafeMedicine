import api from './api';

export const postConsult = async (symptoms: string, diagnosis: string) => {
  const url = '/diagnostic';
  return api.post<{ message: string }>(url, {
    symptoms,
    diagnosis: diagnosis.replace(/\n/g, ' '),
  });
};

export const mockConsult = async (symptoms: string, diagnosis: string) => {
  const url = '/mock';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return api.post<{ message: string }>(url, {
    symptoms,
    diagnosis: diagnosis.replace(/\n/g, ' '),
  });
};
