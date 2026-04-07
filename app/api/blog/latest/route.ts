import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export async function GET() {
  const posts = getAllPosts();
  const latest = posts[0];

  if (!latest) {
    return NextResponse.json({ error: 'No posts found' }, { status: 404 });
  }

  return NextResponse.json({
    slug: latest.slug,
    title: latest.title,
    description: latest.description,
    date: latest.date,
    readTime: latest.readTime,
  });
}
