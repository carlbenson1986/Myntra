import Link from 'next/link'
import React from 'react'

export default function LogoAndMenuItems() {
  return (
    <div className="flex items-center ">
    <Link href={"/"}>
      <img
        src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
        alt=""
        className="md:h-9 max-sm:h-8 max-sm:mr-1 md:mx-5"
      />
    </Link>
    {/* Menu Items */}
    <ul className="flex md:space-x-6 max-sm:space-x-2">
      <li>
        <Link
          href="/shop"
          className="font-semibold md:text-sm  max-sm:text-xs"
        >
          MEN
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className="font-semibold md:text-sm   max-sm:text-xs"
        >
          WOMEN
        </Link>
      </li>
      <li>
        <Link
          href={"/shop"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          KIDS
        </Link>
      </li>
      <li>
        <Link
          href={"/shop"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          HOME & LIVING
        </Link>
      </li>
      <li>
        <Link
          href={"/shop"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          BEAUTY
        </Link>
      </li>
      <li>
        <Link
          href={"/shop"}
          className="font-semibold max-sm:text-xs text-sm"
        >
          STUDIO
        </Link>
      </li>
    </ul>
  </div>
  )
}
