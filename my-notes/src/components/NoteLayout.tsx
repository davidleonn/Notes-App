import { Navigate, Outlet, useParams } from "react-router-dom";

import { NoteLayoutProps } from "../utils/app.utils";

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((myNote) => myNote.id === id);

  if (note == null) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

export default NoteLayout;
