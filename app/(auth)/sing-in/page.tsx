import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href='/'>
          <Image src='/assets/icons/logo.svg' alt='logo' width={32} height={32}/>
          </Link>
          <h1>SnapCast</h1>
          <div className='description'>
            <section>
                <figure>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image key={i} src='/assets/icons/star.svg' alt='star' width={20} height={20}/>
                  ))}
                </figure>
                <p>
                  SnapCast makes screen recording and video sharing easy and efficient. Capture your screen, record your camera, and share videos seamlessly with our user-friendly platform.
                </p>
                <article>
                    <Image src='/assets/images/jason.png' alt='jason' width={64} height={64} className='rounded-full '/>
                    <div >
                        <h2>Jason Lee</h2>
                        <p>Product Manager at TechCorp</p>
                    </div>
                </article>
            </section>
            
          </div>
          <p>Ⓒ  SnapCast {(new Date()).getFullYear()}</p>
      </aside>
      <aside className='google-sign-in'>
        <section>
                <Link href="/">
                  <Image src='/assets/icons/logo.svg' alt='logo' width={40} height={40}/>
                  <h1>SnapCast</h1>
                </Link>
                <p>Create and share your very first <span>SnapCast video</span> in no time!</p>
                <button>
                  <Image src='/assets/icons/google.svg' alt='google' width={22} height={22}/>
                  <span>Sign in with Google</span>
                </button>
      </section>
      </aside>
      <div className='overlay'/>
    </main>
  )
}

export default Page