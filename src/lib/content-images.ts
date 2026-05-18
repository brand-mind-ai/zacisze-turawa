const nonContentImagePattern =
  /logo|direct-menu|phone-menu|rez-menu|rev_|hs\.png|roomshield|roomdollar/i;

const highResolutionPairs = new Map<string, string>([
  ["/media/current-site/001-103.jpg", "/media/hotel-v2/exterior-forest.jpg"],
]);

export function isContentImage(src: string | undefined): src is string {
  return Boolean(src && !nonContentImagePattern.test(src));
}

export function contentImages(images: Array<string | undefined>): string[] {
  return images.filter(isContentImage).map((image) => highResolutionPairs.get(image) ?? image);
}
