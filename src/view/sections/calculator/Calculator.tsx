import { ContainerContentWrapper } from "@/view/components";
import s from "./Calculator.module.scss";
import { Button, ControlledTextField, TextField, Typography } from "@/view/ui";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItemAC, addItemsPrice, removeItem } from "@/app/calculatorReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "@/app/store";
import { ChangeEvent, useCallback } from "react";

export type CalculatorValues = z.infer<typeof calculatorSchema>;

const calculatorSchema = z.object({
  item: z
    .string()
    .min(1, "Nimetus peab olema vähemalt 1 sümbolit pikk")
    .max(25, "Nimetus võib olla maksimum 25 sümbolit pikk"),
  price: z.coerce
    .number({
      invalid_type_error: "Siia võib lisada ainult numbrit",
    })
    .gte(1, "Peab olema rohkem kui 0"),
});

export const Calculator = () => {
  const dispatch = useDispatch();
  const calculatorItems = useSelector(
    (state: AppRootStateType) => state.calculator.items,
  );
  console.log(calculatorItems, "calculatorItems");

  const calculatorItemsSum = () => {
    return calculatorItems.reduce((acc, item) => (acc += item.price), 0);
  };

  console.log(calculatorItemsSum(), "sum");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      items: [{ item: "", price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  console.log(fields, "fields");

  // const handleAddingItemToCalculator = handleSubmit(
  //   (calcItem: CalculatorValues) => {
  //     console.log(calcItem);
  //     dispatch(addItemAC(calcItem));
  //   },
  // );

  let timeoutId: ReturnType<typeof setTimeout>;
  const saveItemChanges = (
    e: ChangeEvent<HTMLInputElement>,
    fieldId: string,
  ) => {
    const targetValue = e.target.value;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      // call it changeItemsPrice, coz we change from the beginning (0 is initial)
      dispatch(addItemsPrice({ id: fieldId, price: Number(targetValue) }));
      // dispatch target value
      // add to this object from fields the proper field it of item.
    }, 200);
  };

  const removeItemFromCalculator = () => {
    remove(fields.length - 1);
    const itemToRemove = fields.find((_, idx) => idx === fields.length - 1);

    if (!itemToRemove) {
      return;
    }
    dispatch(removeItem(itemToRemove.id));
  };

  return (
    <div id={"calculatorSection"} className={s.calculatorContainer}>
      <ContainerContentWrapper className={s.calculatorContainerContentWrapper}>
        <Typography variant={"h2"}>
          <strong>Pane oma soovinimekiri kokku</strong> siinsamas lehel ja vaata
          oma sisustuse kuumakset.
        </Typography>
        <Typography>Toode</Typography>
        <Typography>Hind</Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          {fields.map((_field, idx) => {
            return (
              <div key={idx} className={s.formContentWrapper}>
                <div>
                  <TextField
                    {...register(`items.${idx}.item`)}
                    errorMessage={errors.items?.message} // wrong message extraction?
                  />
                </div>
                <div>
                  <TextField
                    {...register(`items.${idx}.price`)}
                    onChange={(e) => saveItemChanges(e, _field.id)}
                    errorMessage={errors.items?.message}
                  />
                </div>
              </div>
            );
          })}
          {/*<div className={s.formContentWrapper}>*/}
          {/*  <div>*/}
          {/*    <Typography>Toode</Typography>*/}
          {/*    <ControlledTextField*/}
          {/*      name={`numbers.${index}.number`}*/}
          {/*      control={control}*/}
          {/*      errorMessage={errors.items?.message}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <Typography>Hind</Typography>*/}
          {/*    <ControlledTextField*/}
          {/*      name={"items"}*/}
          {/*      control={control}*/}
          {/*      errorMessage={errors.items?.message}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className={s.formBtns}>
            <Button
              onClick={() => append({ item: "", price: 0 })}
              style={{ backgroundColor: "red" }}
            >
              Lisa
            </Button>
            {fields.length > 1 && (
              <Button
                onClick={removeItemFromCalculator}
                style={{ backgroundColor: "red" }}
              >
                Kustuta
              </Button>
            )}
          </div>
        </form>
        <div>sum : {calculatorItemsSum()}</div>
      </ContainerContentWrapper>
    </div>
  );
};
