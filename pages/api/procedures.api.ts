// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  type: string;
  id: string;
  attributes: {
    title: string;
    fileNumber: string;
    shortDescription: string;
    lotDivision: boolean;
    internalDocumentation: string;
    createdAt: string;
    state: string;
    cancelled: boolean;
    locked: boolean;
  };
}[];

const procedures = [
  {
    type: "Verhandlungsverfahren",
    id: "awardProcedure",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 1",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "DRAFT",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "Offenes Verfahren",
    id: "awardProcedure 1",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 2",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "DRAFT",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "awardProcedure",
    id: "awardProcedure 2",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 3",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "ACTIVE",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "Direktvergabe",
    id: "awardProcedure 3",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 4",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "DRAFT",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "awardProcedure",
    id: "awardProcedure 4",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 5",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "ACTIVE",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "awardProcedure",
    id: "awardProcedure 5",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 6",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "COMPLETED",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "awardProcedure",
    id: "awardProcedure 6",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 7",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "COMPLETED",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "awardProcedure",
    id: "awardProcedure 7",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 8",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "COMPLETED",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "awardProcedure",
    id: "awardProcedure 8",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 9",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "COMPLETED",
      cancelled: false,
      locked: false,
    },
  },
  {
    type: "awardProcedure",
    id: "awardProcedure 9",
    attributes: {
      title: "Neubau Wohnheim und Tagesförderstätte 10",
      fileNumber: "OKS 403-55",
      shortDescription: "string",
      lotDivision: true,
      internalDocumentation: "string",
      createdAt: "2022-08-24T06:54:59.887Z",
      state: "COMPLETED",
      cancelled: false,
      locked: false,
    },
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { page } = req.query;
  const start = page ? (+page - 1) * 3 : 0;
  const end = start + 3;

  const paged = procedures.slice(start, end);

  const delay = Math.floor(Math.random() * (750 - 500) + 500);

  await new Promise((resolve) => setTimeout(() => resolve(res.status(200).json(paged)), delay));
}
