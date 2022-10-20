import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

interface FruitsFormData {
  fruits: string[];
}

export default function MultiCheckboxes() {
  const { control, handleSubmit } = useForm<FruitsFormData>({
    defaultValues: {
      fruits: [],
    },
  });

  const fruitOptions = [
    {
      label: "🍏",
      value: "apple",
    },
    {
      label: "🍊",
      value: "orange",
    },
    {
      label: "🍌",
      value: "banana",
    },
  ];

  const onSubmit = (values: FruitsFormData): void => {
    console.log("Selected values", values.fruits);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 20,
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Fruits</FormLabel>
        <FormGroup>
          <Controller
            name="fruits"
            control={control}
            render={({ field }) => (
              <>
                {fruitOptions.map(fruitOption => (
                  <FormControlLabel
                    key={fruitOption.value}
                    label={fruitOption.label}
                    control={
                      <Checkbox
                        value={fruitOption.value}
                        // For some reason codesandbox doesn't support `field.value.includes(...)`
                        checked={field.value.some(
                          existingValue => existingValue === fruitOption.value
                        )}
                        onChange={(event, checked) => {
                          console.log(field);
                          if (checked) {
                            field.onChange([
                              ...field.value,
                              event.target.value,
                            ]);
                          } else {
                            field.onChange(
                              field.value.filter(
                                value => value !== event.target.value
                              )
                            );
                          }
                        }}
                      />
                    }
                  />
                ))}
              </>
            )}
          />
        </FormGroup>
      </FormControl>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
