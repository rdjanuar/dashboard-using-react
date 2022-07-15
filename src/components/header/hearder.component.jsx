import New from "../../assert/img/headers/new.svg";
import search from "../../assert/img/headers/search.svg";
import avatar from "../../assert/img/headers/avatar.svg";

export const Header = ({ alt, header }) => {
  return (
    <header className="mx-auto container">
      <div className="flex items-center justify-between p-10">
        <h1 className="text-2xl font-bold font-Mulish tracking-wider text-colorHeaders">
          {header}
        </h1>
        <div className="flex items-center divide-x-2">
          <img src={search} className="px-2" alt={alt}></img>
          <img src={New} className="px-2" alt={alt}></img>
          <div className="flex items-center">
            <p className="px-2">Jones Ferdinand</p>
            <img src={avatar} className="px-2" alt={alt}></img>
          </div>
        </div>
      </div>
    </header>
  );
};
