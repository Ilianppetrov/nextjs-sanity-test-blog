import urlFor from "lib/urlFor";
import Image from "next/image";
import Link from "next/link";

const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog image"
            fill
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 fond-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 fond-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 fond-bold">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-black border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
};

export default RichText;
