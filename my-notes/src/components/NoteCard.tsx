import { Card } from "react-bootstrap";
import { SimplifiedNote } from "../utils/app.utils";
import { Link } from "react-router-dom";

export const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
  return (
    <Card
      as={Link}
      to={`${id}`}
      className={`h-100 text-reset text-decoration-none`}
    >
      <Card.Body></Card.Body>
    </Card>
  );
};
