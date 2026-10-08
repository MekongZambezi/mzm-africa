import { notFound } from 'next/navigation'

// Any unknown path inside /en or /vi shows the localised 404 page.
export default function CatchAll() {
  notFound()
}
