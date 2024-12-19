import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

export const registerUser = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_BASE_URL}/auth/login`, userData);
export const submitTicket = (ticketData) => axios.post(`${API_BASE_URL}/tickets/submit`, ticketData);
export const fetchPendingTickets = () => axios.get(`${API_BASE_URL}/tickets/pending`);
export const processTicket = (ticketId, action) => axios.patch(`${API_BASE_URL}/tickets/${ticketId}/${action}`);
export const fetchUserTickets = (userId) => axios.get(`${API_BASE_URL}/tickets/user/${userId}`);
