const navigationMap = new Map<string, any>();

export default async function getPages() {
  const response = await fetch(
    "https://dw10dsz.public9.dynamicweb.dk/dwapi/frontend/navigations/1?ExpandMode=all"
  );

  if (!response.ok) {
    throw new Error("failed to fetch pages");
  }

  const navigation = await response.json();
  for (const page of navigation.nodes) navigationMap.set(page.link, page);

  return navigation;
}

export async function getPageBySlug(slug: string) {
  if (navigationMap.size === 0) await getPages();

  if (!navigationMap.has(slug)) return null;

  const page = navigationMap.get(slug);

  const response = await fetch(
    `https://dw10dsz.public9.dynamicweb.dk/dwapi/content/pages/${page.pageId}`
  );

  if (!response.ok) {
    throw new Error("failed to fetch pages");
  }

  return await response.json();
}
