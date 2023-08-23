import Link from 'next/link'

export const metadata = {
  title: 'Shopping Cart',
  description: 'Cart with next.js!'
}

export default function Home() {
  return (
    <main>
    <h1>
      Welcome to <Link href='https://nextjs.org'>Next.js!</Link>
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quae tenetur! At, quo, harum quibusdam sit provident error iure dicta facilis voluptates numquam quisquam. Reprehenderit blanditiis suscipit odio facere non?
    </p>
  </main>
  )
}
