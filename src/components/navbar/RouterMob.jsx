import { navLinks } from "../../constants/constants.js";

export const RouterMob = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "flex items-center justify-center" : "hidden"
      } bg-black-gradient sidebar absolute top-20 right-0 mx-auto my-2 w-full cursor-pointer p-6 ss:hidden`}
    >
      <nav className="flex items-center justify-between ">
        <ul className="flex list-none flex-col space-y-8">
          {navLinks.map((navLink) => (
            <li
              className="flex text-xl leading-tight hover:text-hoverWhite focus:text-white"
              key={navLink.id}
            >
              <a href={`#${navLink.title}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
