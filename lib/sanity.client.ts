// import { createClient } from "next-sanity";

// export const projectId = 'o00aen5e';
// export const dataset = 'production';
// export const apiVersion = '2023-04-25';

// export const client = createClient({
//     projectId,
//     dataset,
//     apiVersion,
//     useCdn: false
// })

import {createClient} from 'next-sanity'

const project_id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const data_set = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const api_version = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const projectId = project_id
export const dataset = data_set
export const apiVersion = api_version

export const client = createClient({projectId, dataset, apiVersion, useCdn: false})