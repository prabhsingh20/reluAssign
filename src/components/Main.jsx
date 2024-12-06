import Post from "./Post";
import Search from "./Search";

function Main() {
  return (
    <main className="sideNavigation flex flex-col gap-7 overflow-scroll scroll-smooth p-5 pt-7">
      <Search />
      <Post />
    </main>
  );
}

export default Main;
