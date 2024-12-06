import { data } from "../data/post";

function Post() {
  return (
    <main className="sideNavigation h-full overflow-scroll">
      <ul className="flex flex-col gap-10">
        {data.map((post) => (
          <li
            key={post.profileName}
            className="flex flex-col justify-between gap-4 rounded-[10px] bg-white p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <img src={post.profileImg} alt={post.profileName} />
                <div>
                  <h2 className="text-xl font-semibold text-black-2">
                    {post.profileName}
                  </h2>
                  <h4 className="text-sm font-medium text-grey-4">
                    {post.accountHolder}
                  </h4>
                </div>
              </div>
              <span className="material-symbols-outlined cursor-pointer">
                more_vert
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{post.description}</p>
            </div>
            <div className="relative pb-4">
              <img
                src={post.postImage}
                alt={post.profileName}
                className="w-full"
              />
              <img
                src="/heart (1).svg"
                alt="heart icon"
                className="absolute right-8 top-7 cursor-pointer"
              />
            </div>

            <div className="flex gap-6 border-t-[1px] border-t-grey-3 pt-6">
              <div className="flex gap-2">
                <img src="/like.svg" alt="like icon" />
                <span>{post.like}</span>
              </div>

              <div className="flex gap-2">
                <img src="/comment.svg" alt="comment icon" />
                <span>{post.comment}</span>
              </div>

              <div className="flex gap-2">
                <img src="/share.svg" alt="share icon" />
                <span>{post.share}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Post;
