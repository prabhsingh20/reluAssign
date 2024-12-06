import { useState } from "react";
import Artist from "./Artist";
import Photographer from "./Photographer";

function Gallery() {
  const [selectedTab, setSelectedTab] = useState("artist");

  return (
    <main className="sideNavigation mt-2 flex flex-col gap-4 overflow-scroll">
      <div className="flex gap-7">
        <h3
          className={`cursor-pointer text-base font-semibold ${selectedTab === "artist" ? "text-black-2" : "text-grey-4"}`}
          onClick={() => setSelectedTab("artist")} // Change tab to 'artist' when clicked
        >
          Artists
        </h3>
        <h3
          className={`cursor-pointer text-base font-semibold ${selectedTab === "photographer" ? "text-black-2" : "text-grey-4"}`}
          onClick={() => setSelectedTab("photographer")} // Change tab to 'photographer' when clicked
        >
          Photographers
        </h3>
      </div>

      {selectedTab === "artist" && <Artist />}
      {selectedTab === "photographer" && <Photographer />}
    </main>
  );
}

export default Gallery;
