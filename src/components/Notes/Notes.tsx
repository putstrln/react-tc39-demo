interface NotesProps {
  children: JSX.Element | JSX.Element[];
}

export const Notes = ({ children }: NotesProps) => (
  <section>
    <header>Notes</header>
    <ol>{children}</ol>
  </section>
);
