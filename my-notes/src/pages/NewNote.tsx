import { NoteForm } from "../components";
import { NoteData, Tag } from "../utils/app.utils";

type NewNoteprops = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (rag: Tag) => void;
  availableTags: Tag[];
};

export const NewNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteprops) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};
