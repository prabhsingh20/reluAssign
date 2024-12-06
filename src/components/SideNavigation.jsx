import FooterNav from "./FooterNav";
import Logo from "./Logo";
import Navigation from "./Navigation";

function SideNavigation() {
  return (
    <nav className="sideNavigation flex h-auto flex-col justify-between gap-4 overflow-scroll bg-grey-2">
      <Logo />
      <Navigation />
      <FooterNav />
    </nav>
  );
}

export default SideNavigation;
