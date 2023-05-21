import sanityClient from "@sanity/client";

  export const client = sanityClient({
  projectId: "v0ji426j",
  dataset: "production",
  apiVersion: "2022-09-14",
  useCdn: true,
});
