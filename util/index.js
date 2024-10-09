export const graphCMSImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`; // This assumes the CMS already provides an optimized image URL
}