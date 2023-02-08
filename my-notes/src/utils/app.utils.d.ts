export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (rag: Tag) => void;
  availableTags: Tag[];
};

type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNote[];
};

export type Tag = {
  id: string;
  label: string;
};
