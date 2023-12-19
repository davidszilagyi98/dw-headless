"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getServerUrl } from "../api/server";

export default function Product({ product }: { product: any }) {
  const pathname = usePathname();
  const buttonUrl = `${pathname}?ProductIDs=${product.id}`;

  return (
    <div className="bg-white p-3 card w-100 h-100">
      <p>{product.primaryOrDefaultGroup.name}</p>
      <div className="ratio ratio-4x3 ">
        <img
          className=" object-fit-cover"
          alt=""
          src={getServerUrl(product.assetCategories[0].assets[0].value)}
        />
      </div>
      <p className="fw-bold text-decoration-underline mt-3">{product.name}</p>
      <p className="mb-0">Net weight</p>
      <p>{product.weight} Kg</p>
      <p>{product.price.priceFormatted}</p>

      <button type="button" className="btn p-2 cta-button d-flex mx-auto">
        <Link
          className="text-decoration-none button-text-color"
          href={buttonUrl}>
          View details
        </Link>
      </button>
    </div>
  );
}
