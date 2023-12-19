import dynamic from "next/dynamic";
import { getServerUrl } from "../api/server";
export async function Paragraph({ paragraph }: { paragraph: any }) {
  const ItemType = dynamic<{ paragraph: any }>(
    () => import(`./item_types/${paragraph.item.systemName}`)
  );
  return <ItemType paragraph={paragraph} />;
}
