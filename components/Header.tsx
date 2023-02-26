
import { tw } from "twind";

const listClass = "py-2 px-4 hover:underline";

const menu =["Project", "Manual","Movie","Song","Light"]

export default function Header() {
  return <div className={tw`w-screen flex justify-center border-b-[1px]`}>
    <div className={tw`w-5/6 py-8 flex`}>
      <a href="/">
        {/* <span className={tw`text-3xl`}><img src="goldknight2.png" /></span> */}
        <img src ="goldknight2.png"/>

      </a>
      <nav className={tw`ml-auto`}>
        <ul class={tw`flex text-sm w-full`}>
          {menu.map(it => (
            <li className={tw`flex`} key={it}>
              <a href={`/${it.toLowerCase()}`} class={tw(listClass)}>{it}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
}