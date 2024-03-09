import { useState } from "react";
import Tag from "../../ui/Tag";
import UnlikedHeart from "../../ui/SVG/UnlikedHeart";
import LikedHeart from "../../ui/SVG/LikedHeart";
import { usePostsContext } from "../../Context/PostsProvider";

function Post({ post, type }) {
  const { title, body, tags, image, likes, id } = post;
  const [liked, setLiked] = useState(false);

  const { incrementLikes, decrementLikes } = usePostsContext();
  function handleLike() {
    console.log(id);
    if (liked) {
      decrementLikes(id);
    } else {
      incrementLikes(id);
    }
    setLiked((p) => !p);
  }

  return (
    <li className="flex max-w-96 flex-col border bg-white p-4">
      <div className="mb-4 grid grid-cols-[3rem,1fr] gap-2">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user-profile"
          className="aspect-square  object-cover object-center"
        />
        <div>
          <h1 className="font-serif text-base italic">Username</h1>
          <p className="flex items-center justify-between text-sm text-stone-500">
            <span>time</span>
            <span>date</span>
          </p>
        </div>
      </div>
      <p className="mb-2 font-serif text-base font-semibold italic">{title}</p>

      {type === undefined && (
        <>
          <ul className="my-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t}>
                <span>{t}</span>
              </Tag>
            ))}
          </ul>
          <p className="text-sm text-stone-500">{body}</p>
          {image && (
            <img
              src={image}
              alt="anyImage"
              className="mb-2 mt-4 
        aspect-square w-full rounded-md object-cover object-center"
            />
          )}
          <div className="flex items-center gap-2">
            {!liked ? (
              <UnlikedHeart onClick={handleLike} />
            ) : (
              <LikedHeart onClick={handleLike} />
            )}
            <span className="text-xs">{likes}</span>
          </div>
        </>
      )}
    </li>
  );
}

export default Post;
