import { Inter } from "@next/font/google";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";
import CustomPreviewSuspense from "@/components/CustomPreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

export const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  if (previewData()) {
    return (
      <CustomPreviewSuspense fallback={<div>loading</div>}>
        <PreviewBlogList query={query} />
      </CustomPreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
