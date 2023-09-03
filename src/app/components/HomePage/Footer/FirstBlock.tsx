import React from 'react'

export default function FirstBlock() {
  return (
    <div>
          <h3 className="text-sm font-semibold uppercase py-2 p-1"> online shopping</h3>
          <ol
            className=" font-light 
          text-xs p-1"
          >
            <li>Men</li>
            <li>Women</li>
            <li>kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ol>
          <h3 className="text-sm uppercase py-2 font-semibold p-1">useful links</h3>
          <ol className="text-xs font-light p-1">
            <li>Blog</li>
            <li>Careers</li>
            <li>site Map</li>
            <li>Whitehat</li>
          </ol>
        </div>
  )
}
