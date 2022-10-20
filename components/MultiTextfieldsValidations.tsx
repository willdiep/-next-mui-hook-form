/* eslint-disable react/jsx-props-no-spreading */
// index.tsx

// https://www.youtube.com/watch?v=nt8NTuUbuG4&t=1136s
// https://github.com/leoroese/reacthookform-v7-ts-materialui-tutorial/blob/part1/pages/index.tsx

import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";

import { v4 as uuidv4 } from "uuid";

import defaultTcValues from "../default-tube-conditioning-values.json";
const defaultTcPhases = defaultTcValues.phases;

import styles from "../styles/Home.module.css";

interface IFormInputs {
  phase1: string | number;
  phase2: string | number;
}

const yupValidations = yup
  .number()
  .integer("Value must be a whole number")
  .max(10, "Max value is 10")
  .required()
  .typeError("A number must be specified");

const schema = yup.object().shape({
  phase1: yupValidations,
  phase2: yupValidations,
});

const Home: FC = () => {
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = data =>
    console.log("data submitted: ", data);

  // console.log(watch("phase"));
  console.log("errors are", errors);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {defaultTcPhases.map(phase => (
            <div key={uuidv4()}>
              <Controller
                // name="phase1"
                name={`phase${phase.id + 1}`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Number"
                    variant="outlined"
                    error={!!errors.phase1}
                    helperText={errors.phase1 ? errors.phase1?.message : ""}
                    fullWidth
                    margin="dense"
                  />
                )}
              />
            </div>
          ))}

          {/* <Controller
            name="phase1"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Number"
                variant="outlined"
                error={!!errors.phase1}
                helperText={errors.phase1 ? errors.phase1?.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          />
          <br />
          <Controller
            name="phase2"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Number"
                variant="outlined"
                error={!!errors.phase2}
                helperText={errors.phase2 ? errors.phase2?.message : ""}
                fullWidth
                margin="dense"
              />
            )}
          /> */}
          <br />

          <input type="submit" />
        </form>
      </main>
    </div>
  );
};

export default Home;
