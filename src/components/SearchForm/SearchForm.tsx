import { Form } from "react-bootstrap";

const SearchForm = () => {
  return (
    <div className="container w-50">
      <Form>
        <Form.Group>
            <Form.Label>
                Type a show!
            </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="example: The Flash"
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
