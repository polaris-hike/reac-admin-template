import { commonRequest } from './axios';

export async function getOrgTree() {
  const response = await commonRequest.get(`/org/tree`);

  return response.data;
}

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
