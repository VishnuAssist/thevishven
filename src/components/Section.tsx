import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}