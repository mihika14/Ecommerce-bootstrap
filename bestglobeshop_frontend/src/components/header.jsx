import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import Btn from "./btn";

import Categories from "./cat";
function Check() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <a onClick={() => signOut()} > Logout</a>
      </>
    )
  }
  return (
    <>
      <a onClick={() => signIn()} > Signin </a>
    </>
  )
}

function Header() {
  return (
    <header className="header_area">
      <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        <nav className="classy-navbar" id="essenceNav">
          <Link className="nav-brand" href="/">
            <Image
              width={50}
              height={50}

              src="/img/core-img/logo.png"
              alt=""
            />
            Bestglobeshop
          </Link>
          <div className="classy-navbar-toggler">
            <span className="navbarToggler">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="classy-menu">
            <div className="classycloseIcon">
              <div className="cross-wrap">
                <span className="top" />
                <span className="bottom" />
              </div>
            </div>
            <div className="classynav">
              <ul>
                <li id="shop_nav">
                  <a href="#">Shop</a>
                  <Categories />

                </li>
                <li>
                  <a href="#">More</a>
                  <ul className="dropdown">
                    <Btn name={"Home"} url={"/"} />
                    <Btn name={"Product"} url={"/product"} />
                    <Btn name={"Announcement"} url={"/announcement"} />
                  </ul>
                </li>
                <Btn name={"Blog"} url={"/blog"} />

                <Btn name={"Contact"} url={"/contact_us"} />

              </ul>
            </div>
          </div>
        </nav>
        <div className="header-meta d-flex clearfix justify-content-end">
          <div className="search-area">
            <form method="get" action="/search/">
              <input
                type="search"
                name="query"
                id="headerSearch"
                placeholder="Type for search"
              />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="favourite-area">
            <a href="#">
              <Image width={25} height={25} src="/img/core-img/heart.svg" alt="" />
            </a>

          </div>
          <div className="user-login-info">
            <Check />
          </div>
          <div className="cart-area">
            <a href="/cart/cart-detail/" id="essenceCartBtn">
              <Image src="/../img/core-img/bag.svg" width={25} height={25} alt="" />
              <span>•</span>
            </a>
          </div>
        </div>
      </div>
    </header>

  )
};


export default Header;