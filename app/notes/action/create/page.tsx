import type { Metadata } from 'next';
import css from './NoteCreate.module.css';
import NoteForm from '@/components/NoteForm/NoteForm';


export const metadata: Metadata = {
  title: 'Create new note – NoteHub',
  description: 'Use this form to create a new note in NoteHub.',
  openGraph: {
    title: 'Create new note – NoteHub',
    description: 'Use this form to create a new note in NoteHub.',
    url: 'https://notehub.vercel.app/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Create note – NoteHub',
      },
    ],
  },
};


export default async function CreateNote() {

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}