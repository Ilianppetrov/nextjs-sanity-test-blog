import { Post } from "definitions";
import urlFor from "lib/urlFor";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log("bloglist", posts);
  return (
    <div>
      <hr className="border-purple-300 mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10">
        {posts.map((post) => {
          return (
            <ClientSideRoute key={post._id} route={`post/${post.slug.current}`}>
              <div className="group flex flex-col">
                <div className="relative w-full h-80 shadow-lg transition-transform duration-200 ease-out hover:scale-105">
                  <Image
                    className="object-cover object-left"
                    src={post?.mainImage && urlFor(post.mainImage)?.url()}
                    fill
                    alt={post.author.name}
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black p-5 backdrop-blur-lg text-white rounded drop-shadow-xl">
                    <div>
                      <p className="font-bold">{post.title}</p>
                      <p>
                        {new Date(post._createdAt).toLocaleDateString("bg-BG", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold">{post.title}</p>
                  <p className="line-clamp-2">{post.description}</p>
                </div>
              </div>
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
