import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "15ibs2d7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "skciP10gJeaPJ4A7VxpHLm2TQmGs6NrZj8XPepFBMw6IQybQgZAVEoXGSS4Ub87DGcgHV00Foejj5grQflppqxClyizZEuWhYzTWtKL8WThPrEJwZIDtb2SikddfKrIaBt9uf7V8GeKdJ3InhQ3b0rfPMGafuAPU6VLyv8Im3OhLVdEERdJj",
});
