import { useOutletContext } from "react-router-dom";

import { Note } from "../utils/app.utils";

export const useNote = () => {
  return useOutletContext<Note>();
};
