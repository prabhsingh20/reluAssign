import AsideFooter from "./AsideFooter";
import Button from "./Button";
import Gallary from "./Gallary";

function Aside() {
  return (
    <aside className="sideNavigation flex flex-col gap-4 overflow-scroll p-1 pt-7">
      <Button />
      <Gallary />
      <AsideFooter />
    </aside>
  );
}

export default Aside;
