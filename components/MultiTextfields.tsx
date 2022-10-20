import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export const MultiTextfields = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form>
      <Controller
        defaultValue={""}
        name={"textValue1"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Controller
        defaultValue={""}
        name={"textValue2"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Controller
        defaultValue={""}
        name={"textValue3"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Controller
        defaultValue={""}
        name={"textValue4"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Text Value"} />
        )}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </form>
  );
};

export default MultiTextfields;
