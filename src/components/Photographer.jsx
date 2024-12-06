import { photographer } from "../data/post";

function Artist() {
  return (
    <ul className="sideNavigation flex flex-col gap-8 overflow-scroll">
      {photographer.map((photographer) => (
        <li key={photographer.id} className="relative">
          <img
            src={photographer.bgImg}
            alt={photographer.name}
            className="w-full"
          />
          <img
            src={photographer.img}
            alt={photographer.name}
            className="absolute bottom-4 left-4"
          />
          <h2 className="absolute bottom-9 left-[4.8rem] text-base font-semibold text-white">
            {photographer.name}
          </h2>
          <h3 className="absolute bottom-4 left-[4.8rem] text-xs font-medium text-white">
            {photographer.accountHolder}
          </h3>
        </li>
      ))}
    </ul>
  );
}

export default Artist;
