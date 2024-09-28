import { getRegion } from "@lib/data"
import AboutComponents from "@modules/about/components"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "About-Ovia",
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
      <AboutComponents />
    </>
  )
}
