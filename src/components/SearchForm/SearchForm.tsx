import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchShows } from "../../app/appThunks";
import ShowList from "../ShowList/ShowList";
import { saveSearchInfo } from "../../app/appSlice";
import Preloader from "../Preloader/Preloader";

const SearchForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const value = useSelector((state: RootState) => state.app.searchInfo);
  const tasksIsLoading = useSelector((state: RootState) => state.app.isLoading);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(fetchShows(value));
    dispatch(saveSearchInfo(value));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="container w-50">
      {tasksIsLoading && <Preloader />}
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Type a show!</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="example: The Flash"
            onChange={onChange}
            value={value}
          ></Form.Control>
        </Form.Group>
      </Form>
      <ShowList />
    </div>
  );
};

export default SearchForm;
