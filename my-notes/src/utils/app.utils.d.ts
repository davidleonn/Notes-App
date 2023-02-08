export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (rag: Tag) => void;
  availableTags: Tag[];
};

export type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

export type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNote[];
};

export type NoteLayoutProps = {
  notes: Note[];
};

export type Tag = {
  id: string;
  label: string;
};
