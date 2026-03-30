import urlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// https://www.sanity.io/docs/image-url
const builder = urlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source).format("png");
};
