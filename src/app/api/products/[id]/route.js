import { NextResponse } from "next/server";
import productsData from "@/data/products.json";

export async function GET(request, { params }) {
  const data = productsData.products || productsData;

  const product = data.find((item) => String(item.id) === String(params.id));

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
