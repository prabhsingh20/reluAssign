import { useState } from "react";

const navLinks = [
  { name: "Home", img: "/home.svg" },
  { name: "Notification", img: "/notification.svg" },
  { name: "Shop", img: "/wallet.svg" },
  { name: "Conversation", img: "/message.svg" },
  { name: "Wallet", img: "/wallet.svg" },
  { name: "Subscription", img: "/heart.svg" },
  { name: "My Profile", img: "/profile.svg" },
  { name: "Setting", img: "/setting.svg" },
];

function Navigation() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <nav className="sideNavigation flex-grow overflow-y-auto rounded-[10px] bg-white py-8">
      <ul className="flex flex-col gap-8">
        {navLinks.map((nav) => (
          <li
            key={nav.name}
            className={`flex cursor-pointer gap-4 pl-8 text-grey-4 ${activeLink === nav.name ? "border-l-4 border-green-1 text-black" : ""}`}
            onClick={() => handleLinkClick(nav.name)}
          >
            <img
              src={nav.img}
              alt={nav.name}
              className={`${activeLink === nav.name ? "filter-none" : "filter-gray"} transition-all`}
            />
            <span>{nav.name}</span>
          </li>
        ))}
        <li
          className={`mt-16 flex cursor-pointer gap-4 pl-8 text-green-1 ${activeLink === "Log out" ? "border-l-4 border-green-1 text-black" : ""}`}
          onClick={() => handleLinkClick("Log out")}
        >
          <img src="/logout.svg" alt="logout" />
          <span>Log out</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
