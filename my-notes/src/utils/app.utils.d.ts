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
} & Partial<NoteData>;

export type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

export type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNote[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: id) => void;
};

export type NoteLayoutProps = {
  notes: Note[];
};

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (rag: Tag) => void;
  availableTags: Tag[];
};

export type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (rag: Tag) => void;
  availableTags: Tag[];
};

export type NoteProps = {
  onDelete: (id: string) => void;
};

export type Tag = {
  id: string;
  label: string;
};

export type EditTagsModalProps = {
  show: boolean;
  availableTags: Tag[];
  handleClose: () => void;
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};
