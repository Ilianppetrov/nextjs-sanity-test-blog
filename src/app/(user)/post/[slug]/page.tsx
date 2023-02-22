import RichText from "@/components/RichText";
import { PortableText } from "@portabletext/react";
import { Post } from "definitions";
import { client } from "lib/sanity.client";
import urlFor from "lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });

  console.log(post);

  return (
    <article className="px-20 lg:px-0">
      <section className="flex flex-col gap-10 items-center w-full  ">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-2xl">{post.description}</p>
        <div className="max-w-3xl">
          <img
            src={urlFor(post.mainImage).url()}
            alt="main image"
            className="object-cover object-center mx-auto"
          />
        </div>
      </section>
      {post.body && (
        <section>
          <PortableText components={RichText} value={post.body} />
        </section>
      )}
    </article>
  );
}

export default Post;
