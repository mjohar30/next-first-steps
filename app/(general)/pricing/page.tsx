import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is a pricing page",
  keywords: ['Pricing Page', 'prices']
};

export default function PricingPage() {
  return (
    <>
      <span className="flex min-h-screen text-7xl">Pricing Page</span>
    </>
  )
}