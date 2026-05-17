const nonContentImagePattern =
  /logo|direct-menu|phone-menu|rez-menu|rev_|hs\.png|roomshield|roomdollar/i;

export function isContentImage(src: string | undefined): src is string {
  return Boolean(src && !nonContentImagePattern.test(src));
}

export function contentImages(images: Array<string | undefined>): string[] {
  return images.filter(isContentImage);
}
