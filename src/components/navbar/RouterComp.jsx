import { navLinks } from "../../constants/constants.js";

export const RouterComp = () => {
  return (
    <nav>
      <div className="z-[10] flex hidden flex-row items-center justify-between ss:block">
        <ul className="flex list-none flex-row space-x-10 md:space-x-14">
          {navLinks.map((navLink) => (
            <li
              className="flex list-none leading-tight hover:text-hoverWhite active:text-white"
              key={navLink.id}
            >
              <a href={`#${navLink.title}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
