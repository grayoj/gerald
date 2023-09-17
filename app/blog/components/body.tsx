import Link from 'next/link';
import React from 'react';

export const Body = () => {
  return (
    <section className='my-4'>
      <p className='prose prose-neutral text-neutral-600 dark:text-neutral-300 dark:prose-invert'>
        Welcome to Gray Bytes. This is a minimalstic blog where I write articles
        on software development, computer science, distributed systems things I
        am learning and experiencing. I also share working on{' '}
        <span className='border-b border-gray-300 dark:border-gray-700'>
          software projects
        </span>
        .
      </p>
      <p className='prose prose-neutral text-neutral-600 dark:text-neutral-300 dark:prose-invert'>
        If you want to see some nice articles, I recommend checking out{' '}
        <Link href='/blog/backend'>
          Solving the shortest path problem: Dijkstra’s algorithm
        </Link>{' '}
        and{' '}
        <Link href='/blog/image-classifier'>Building an image classifier.</Link>
      </p>
    </section>
  );
};
