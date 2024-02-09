import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is a contact page",
  keywords: ['Contact Page', 'contact']
};

export default function ContactPage() {
  return (
    <>
      <span className="flex min-h-screen text-7xl">Contact</span>
    </>
  )
}