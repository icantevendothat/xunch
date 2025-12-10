import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, 
  dataset: process.env.REACT_APP_SANITY_DATASET,      
  apiVersion: '2025-12-10',                             
  useCdn: true,                                           
});

export const previewClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  token: process.env.REACT_APP_SANITY_API_READ_TOKEN,            
  apiVersion: '2025-12-10',
  useCdn: false,                                        
});