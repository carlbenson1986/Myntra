import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

export default function ThirdBlock() {
  return (
    <div>
    <h3 className="text-sm font-semibold py-2 uppercase p-1">
      Experience Myntra App on Mobile
    </h3>

    <h3 className="text-sm font-semibold uppercase p-1">Keep in Touch</h3>
    <div className="flex text-3xl text-stone-500 py-1">
      <AiFillFacebook />
      <AiOutlineTwitter />
      <AiFillInstagram />
      <AiFillYoutube />
    </div>
  </div>
  )
}
