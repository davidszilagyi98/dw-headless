import { getServerUrl } from "@/app/api/server";
import Link from "next/link";
import Cart from "../Cart";

export default function cart({ paragraph }: { paragraph: any }) {
  const cart = paragraph.item.fields.find(
    (field) => field.systemName === "cart"
  );

  return (
    <div>
      <Cart />
    </div>
  );
}
