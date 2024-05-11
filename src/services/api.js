
import axios from 'axios';

const baseURL = 'http://localhost:8080'; 

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllInvoices = () => {
  return api.get('/invoices');
};

export const addInvoice = (invoice) => {
  return api.post('/invoices', { invoice });
};

export const deleteInvoice = (id) => {
  return api.delete(`/invoices/${id}`);
};

export const updateInvoice = (invoice) => {
  return api.put("/invoices", { invoice });
};
