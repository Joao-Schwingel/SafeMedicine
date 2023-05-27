import api from './api';

export const postConsult = async (symptoms: string, diagnosis: string) => {
  const url = '/diagnostic';
  return api.post<string>(url, {
    symptoms,
    diagnosis: diagnosis.replace(/\n/g, ' '),
  });
};

export const mockConsult = async (symptoms: string, diagnosis: string) => {
  const url = '/mock';
  return api.post<string>(url, {
    symptoms,
    diagnosis: diagnosis.replace(/\n/g, ' '),
  });
};
