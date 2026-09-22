import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StoreButton } from "@/components/StoreButton";
import { Avatar } from "@/components/blog/parts";
import { AUTHOR } from "@/lib/blog";

export const metadata: Metadata = {
  title: "About Sam, who builds Noa",
  description: "Noa is built by Sam, an independent developer in the UK, who started it as the shared calendar, lists and tasks app for their own household.",
  alternates: { canonical: "/about" },
};

// "About Sam ›" on the blog lands here. Keep it short and true.
// TODO(sam): replace the second paragraph with your own words: where you
// are, who's in your household, why you started.
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto flex max-w-[680px] flex-col gap-6 px-5 pb-20 pt-10 md:pt-16">
        <Avatar size={96} />
        <span className="blog-label">About</span>
        <h1 className="font-display text-[34px] font-medium leading-[1.12] text-primaryText md:text-[48px]">
          Hi, I&rsquo;m {AUTHOR.name}. I build Noa.
        </h1>
        <div className="blog-body">
          <p>
            Noa started as the app I wanted for my own household: one calendar everyone could see, shared lists that
            update as people add things, and tasks with a name next to them so nobody has to be the one who remembers
            everything.
          </p>
          <p>
            I&rsquo;m an independent developer in the UK, and Noa is a small, independent app. There&rsquo;s no big
            team behind it, which means when you email, you get me.
          </p>
          <p>
            The <Link href="/blog">blog</Link> is where I write up what&rsquo;s worked in real houses: routines, school
            admin, chores, and the printables we actually use. If something here helps, I&rsquo;d love to hear about it
            at <a href="mailto:hello@asknoa.app">hello@asknoa.app</a>.
          </p>
        </div>
        <div className="pt-2">
          <StoreButton placement="about" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
