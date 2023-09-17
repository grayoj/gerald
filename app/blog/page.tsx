import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';
import { getViewsCount } from 'lib/metrics';
import { Navbar } from 'app/components/navbar';
import { Body } from './components/body';

export const metadata: Metadata = {
  title: 'Gray Bytes',
  description:
    'My blog where I share articles on software development, programming and the things I am learning.',
};

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return formattedDate;
}

const POSTS_PER_PAGE = 10;
let currentPage = 1;
export default async function BlogPage() {
  const allViews = await getViewsCount();
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  const paginatedBlogs = allBlogs
    .sort((a, b) =>
      new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
    )
    .slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    currentPage = newPage;
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar />
      <section>
        <h1 className='font-bold text-2xl mb-8 tracking-tighter'>Gray Bytes</h1>
        <Body />
        {paginatedBlogs.map((post) => (
          <Link
            key={post.slug}
            className='flex flex-col space-y-1 mb-4'
            href={`/blog/${post.slug}`}
          >
            <div className='w-full flex flex-col'>
              <p className='text-neutral-900 dark:text-neutral-100 tracking-tight font-semibold'>
                {post.title}
              </p>
              <p className='italic'>{formatDate(post.publishedAt)}</p>
              <ViewCounter
                allViews={allViews}
                slug={post.slug}
                trackView={false}
              />
            </div>
          </Link>
        ))}
      </section>
      <div className='flex justify-between mt-4'>
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className='px-4 py-2 bg-gray-200 hover:bg-gray-300'
          >
            Previous
          </button>
        )}
        {currentPage < Math.ceil(allBlogs.length / POSTS_PER_PAGE) && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className='px-4 py-2 bg-gray-200 hover:bg-gray-300'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
