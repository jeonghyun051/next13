import './globals.css';
import type { Metadata } from 'next';
import Link from '../../node_modules/next/link';

export const metadata: Metadata = {
  title: 'Web tutorials',
  description: 'Generated by kjh',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const res = await fetch('http://localhost:3001/topics');
  const topics = await res.json();

  return (
    <html>
      <body>
        <h1>
          <Link href='/'>WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <ul>
          <li>
            <Link href='/create'>Create</Link>
          </li>
          <li>
            <Link href='/update/1'>Create</Link>
          </li>
          <li>
            <input type='button' value='delete' />
          </li>
        </ul>
      </body>
    </html>
  );
}
