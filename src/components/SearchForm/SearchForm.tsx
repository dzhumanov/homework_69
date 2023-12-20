import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchShows } from "../../app/appThunks";
import ShowList from "../ShowList/ShowList";

const SearchForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(fetchShows(value));
  };

  return (
    <div className="container w-50 position-relative ">
      <Form>
        <Form.Group>
          <Form.Label>Type a show!</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="example: The Flash"
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
      </Form>
      <ShowList />
    </div>
  );
};

export default SearchForm;
