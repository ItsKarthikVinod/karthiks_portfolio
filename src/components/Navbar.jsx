import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

function Navbar() {
  return (
      <nav>
          <div>
              <img src="/images/logo.svg" alt="logo" />
              <p className="font-bold">Karthik's Portfolio</p>
              <ul>
                  {
                  navLinks.map((item) => (
                      <li key={item.id}>
                          <p>{item.name}</p>
                      </li>
                  ))}
              </ul>
          </div>
          <div>
              <ul>
                  {navIcons.map((item) => (
                      <li key={item.id}>
                          <img src={item.img} alt={`icon-${item.id}`} className='icon-hover'/>
                      </li>
                  ))}
              </ul>
              <time>{dayjs().format("ddd MMM D h:mm A")}</time>
          </div>
    </nav>
  )
}

export default Navbar