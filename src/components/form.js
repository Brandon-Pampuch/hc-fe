import React from "react";
import { useForm } from "react-hook-form";
import { useHcContext } from "../context";

export function Form() {
  const { hcContext, setHcContext } = useHcContext();
  const { register, handleSubmit } = useForm();

  //TODO implement form to update state.
  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="testing" {...register("text")} />
      <input type="submit" />
    </form>
  );
}
