import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  Row,
  Stack,
} from "react-bootstrap";

import { EditTagsModalProps } from "../utils/app.utils";
import { on } from "process";

const EditTagsModals = ({
  show,
  availableTags,
  handleClose,
  onUpdateTag,
  onDeleteTag,
}: EditTagsModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Header>
          <Modal.Title>Edit Tags</Modal.Title>
        </Modal.Header>
      </Modal.Header>
      <ModalBody>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(event) =>
                      onUpdateTag(tag.id, event.target.value)
                    }
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => onDeleteTag(tag.id)}
                    variant="outline-danger"
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}{" "}
          </Stack>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditTagsModals;
