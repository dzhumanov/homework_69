import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../app/appSlice";
import { AppDispatch, RootState } from "../../app/store";
import { fetchShows } from "../../app/appThunks";

const SearchForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const stateValue = useSelector((state: RootState) => state.app.showArray);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(changeValue(value));
    dispatch(fetchShows());
    console.log(stateValue);
  };

  return (
    <div className="container w-50">
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
    </div>
  );
};

export default SearchForm;
