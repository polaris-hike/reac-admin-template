import { useQuery } from '@tanstack/react-query';
import { commonRequest } from './axios';

export const useOrgTree = () => {
  return useQuery({
    queryKey: ['getOrgTree'],
    queryFn: () =>
      commonRequest.get('/org/tree').then((response) => response.data),
  });
};

export async function getOrgTreeById(id: string) {
  const response = await commonRequest.get(`/org/${id}`);

  return response.data;
}

export async function addOrgTree(data: any) {
  const response = await commonRequest.post(`/org`, data);

  return response.data;
}

export async function deleteOrgTreeById(id: string) {
  const response = await commonRequest.delete(`/org/${id}`);

  return response.data;
}

export async function updateOrgTree(data: any) {
  const response = await commonRequest.post(`/org`, data);

  return response.data;
}

// orgStation
export function useOrgStation() {
  return useQuery({
    queryKey: ['getOrgStation'],
    queryFn: () =>
      commonRequest.get('/org/station').then((response) => response.data),
  });
}

export async function addOrgStation(data: any) {
  const response = await commonRequest.post(`/org/station`, data);

  return response.data;
}
