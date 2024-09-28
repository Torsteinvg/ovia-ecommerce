import { getRegion } from "@lib/data"
import ContactForm from "@modules/contact/components/contactForm"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Contact-Ovia",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}



export default async function Contact({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

  
  return (
    <>
      <ContactForm />
    </>
  )
}
