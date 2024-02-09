import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is an about page",
  keywords: ['About Page', 'information']
};

export default function AboutPage() {
  return (
    <>
      <span className="flex min-h-screen text-7xl">About Page</span>
    </>
  )
}