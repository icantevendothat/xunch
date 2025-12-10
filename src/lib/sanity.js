import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,      
  apiVersion: '2025-12-10',                             
  useCdn: true,                                           
});


export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-12-10',
  token: process.env.SANITY_API_READ_TOKEN,            
  useCdn: false,                                        
});