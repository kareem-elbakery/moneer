const toMedia = (modules) =>
  Object.entries(modules)
    .map(([path, src]) => {
      const name = path.split("/").pop() ?? "image";

      return {
        path,
        src,
        name,
        alt: name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
      };
    })
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    );

export const coachImages = toMedia(
  import.meta.glob("../assets/coach/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
);

export const certificateImages = toMedia(
  import.meta.glob(
    "../assets/certificates/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
      query: "?url",
    },
  ),
);

export const championshipImages = toMedia(
  import.meta.glob(
    "../assets/championships/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
      query: "?url",
    },
  ),
);

export const transformationImages = toMedia(
  import.meta.glob(
    "../assets/transformations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
      eager: true,
      import: "default",
      query: "?url",
    },
  ),
);

export const heroBackground =
  coachImages.find((image) => image.path.includes("بروفايل")) ?? coachImages[0];

export const heroPortrait =
  coachImages.find((image) => image.path.includes("2.06.59 PM (1)")) ??
  coachImages.find((image) => image.path.includes("بروفايل")) ??
  coachImages[0];

export const aboutPortrait =
  coachImages.find((image) => image.path.endsWith("/4.jpg")) ??
  coachImages.find((image) => image.path.includes("4")) ??
  heroPortrait;
