import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // e.g., 'bmzchytl'
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,       // e.g., 'xunchdata'
  apiVersion: '2025-12-10',                               // Must match the version you see in the Vision tool
  useCdn: true,                                           // Set to true for fast, cached reads (Production)
});


export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-12-10',
  token: process.env.SANITY_API_READ_TOKEN,             // Required to read unpublished drafts
  useCdn: false,                                        // Must be false to fetch the latest drafts
});