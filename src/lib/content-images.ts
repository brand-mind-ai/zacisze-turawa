const assetBlocklist = [
  "logo",
  "direct-menu",
  "phone-menu",
  "rez-menu",
  "rev_",
  "hs.png",
  "roomshield",
  "roomdollar",
];

export function getRenderableImages(images: string[] = []) {
  return images.filter((image) => {
    const normalized = image.toLowerCase();
    return !assetBlocklist.some((blocked) => normalized.includes(blocked));
  });
}
