// import { client } from "@/sanity/lib/client";

// export async function getProperty(property: string) {
//   const query = `*[_type == "property" && slug.current == "${property}"][0] {
// _id,
// name,
//     slug,
//     price,
//     quarter,
//     transaction-> {
//       nameen,
//       namefr,
//       slug
//     },
//     city->{
//       cityname,
//       slug
//     },
//     area,
//     mainimage,
//     propertytype-> {
//       nameen,
//       namefr,
//       slug
//     },
//     rentpricing,
//     bath,
//     parlour,
//     room,
//     "overview": overview[]{
//     "en": overviewen,
//     "fr": overviewfr,
//     "_key": _key
//   },
//   "otherdetails": otherdetails[]{
//     "en": otheren,
//     "fr": otherfr,
//     "_key": _key
//   },
//   "maindetails": maindetails[]{
//     "_key": _key,
//     "keyEn": key.keyen,
//     "keyFr": key.keyfr,
//     "valueEn": value.valueen,
//     "valueFr": value.valuefr
//   },
//   "gallery" : gallery[]{
//     "type": _type,
//     asset,
//     caption,
//     aspectRatio,
//     "url": coalesce(image.asset->url, asset->url),
//   }
// }`;

//   const data = await client.fetch(query);
//   return data;
// }
import { client } from "@/sanity/lib/client"; // adjust import to your client path

export async function getProperty(propertySlug: string) {
  const query = `*[_type == "property" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    publishedAt,
    available,
    price,
    rentpricing,
    quarter,
    area,
    room,
    bath,
    parlour,
    // references
    transaction-> { nameen, namefr, slug },
    propertytype-> { nameen, namefr, slug },
    city-> { cityname, slug },

    // main image with alt and url
    mainimage{
      "alt": coalesce(mainimage.alt, ""),
      "url": coalesce(mainimage.asset->url, "")
    },

    // hero images array
    heroimages[] {
      "alt": coalesce(asset->metadata.altText, coalesce(alt, "")),
      "url": coalesce(asset->url, coalesce(image.asset->url, ""))
    },

    // overview array (each item has en and fr)
    "overview": overview[]{
      "_key": _key,
      "en": overviewen,
      "fr": overviewfr
    },

    // other details array (each item has en and fr)
    "otherdetails": otherdetails[]{
      "_key": _key,
      "en": otheren,
      "fr": otherfr
    },

    // gallery items (images and video files)
    "gallery": gallery[]{
      _type,
      _key,
      // for images
      asset,
      caption,
      aspectRatio,
      "url": coalesce(image.asset->url, asset->url)
    }
  }`;

  const params = { slug: propertySlug };
  const data = await client.fetch(query, params);
  return data;
}

export async function getAllPropertySlugs(): Promise<string[]> {
  const query = `*[_type == "property" && defined(slug.current)]{
    "slug": slug.current
  }`;

  const properties = await client.fetch(query);
  return properties.map((property: { slug: string }) => property.slug);
}
