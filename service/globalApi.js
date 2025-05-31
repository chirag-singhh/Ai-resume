import axios from 'axios'
const API_KEY =import.meta.env.VITE_STRAPI_PUBLISHABLE_KEY
const instance = axios.create({
  baseURL: 'http://localhost:1337/api/',
//   timeout: 1000,
  headers: {
    'Content-Type':'application/json',
    'Authorization':`Bearer ${API_KEY}`
  }
});

// const createResume=(data)=>instance.post('/api/user-resumes',{data})

const createResume=(data)=>instance.post('/user-resumes',{data});
export default {
    createResume
}