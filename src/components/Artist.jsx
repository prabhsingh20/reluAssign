import { artist } from "../data/post";

function Artist() {
  return (
    <ul className="sideNavigation flex flex-col gap-8 overflow-scroll">
      {artist.map((artist) => (
        <li key={artist.id} className="relative">
          <img src={artist.bgImg} alt={artist.name} className="w-full" />
          <img
            src={artist.img}
            alt={artist.name}
            className="absolute bottom-4 left-4"
          />
          <h2 className="absolute bottom-9 left-[4.8rem] text-base font-semibold text-white">
            {artist.name}
          </h2>
          <h3 className="absolute bottom-4 left-[4.8rem] text-xs font-medium text-white">
            {artist.accountHolder}
          </h3>
        </li>
      ))}
    </ul>
  );
}

export default Artist;
