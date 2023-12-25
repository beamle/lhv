import { ContainerContentWrapper } from "@/view/components";
import s from "./Calculator.module.scss";
import { Button, TextField, Typography } from "@/view/ui";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addItemsPrice,
  removeItem,
} from "@/view/sections/calculator/reducer/calculatorReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "@/app/store";
import { Bin, Euro, Plus } from "../../../../public/assets/icons";

export type FormValues = z.infer<typeof calculatorSchema>;

const calculatorSchema = z.object({
  items: z.array(
    z.object({
      name: z.string().min(1, "Palun lisa ka nimetust"),
      price: z.coerce
        .number({
          invalid_type_error: "Palun lisa ainult numbrid",
        })
        .gte(0, "Peab olema rohkem kui 0"),
    }),
  ),
});

export const Calculator = () => {
  const dispatch = useDispatch();
  const calculatorItems = useSelector(
    (state: AppRootStateType) => state.calculator.items,
  );

  const calculatorItemsSum = () => {
    return calculatorItems.reduce((acc, item) => (acc += item.price), 0);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      items: [{ name: "", price: 0 }],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const handlePriceChange = (price: string, fieldId: string) => {
    const priceAsNumber = Number(price);
    if (!isNaN(priceAsNumber) && priceAsNumber > 0) {
      dispatch(addItemsPrice({ id: fieldId, price: priceAsNumber }));
    }
  };

  const removeItemFromCalculator = () => {
    remove(fields.length - 1);
    const itemToRemove = fields.find((_, idx) => idx === fields.length - 1);

    if (!itemToRemove) {
      return;
    }
    dispatch(removeItem(itemToRemove.id));
  };

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data);
  });

  return (
    <div id={"calculatorSection"} className={s.calculatorContainer}>
      <ContainerContentWrapper className={s.calculatorContainerContentWrapper}>
        <Typography variant={"h2"} className={s.headline}>
          <strong>Pane oma soovinimekiri kokku</strong> siinsamas lehel ja
          <br /> vaata oma sisustuse kuumakset.
        </Typography>
        <div className={s.calculatorCentrilizer}>
          <div className={s.fieldsLabels}>
            <Typography>Toode</Typography>
            <Typography>Hind</Typography>
            <Typography />
          </div>
          <form onChange={onSubmit} className={s.form}>
            {fields.map((_field, idx) => {
              return (
                <div key={idx} className={s.formContentWrapper}>
                  <div className={s.firstInput}>
                    <TextField
                      placeholder={"Toode.."}
                      {...register(`items.${idx}.name`)}
                    />
                    <Typography
                      className={s.errorMessage}
                      style={{
                        opacity: errors.items ? 1 : 0,
                      }}
                    >
                      {errors.items?.[idx]?.name?.message}
                    </Typography>
                  </div>
                  <div>
                    <TextField
                      {...register(`items.${idx}.price`)}
                      onBlur={(e) =>
                        handlePriceChange(e.target.value, _field.id)
                      }
                      icon={<Euro />}
                      trailingIcon={true}
                    />
                    <Typography
                      className={s.errorMessage}
                      style={{
                        opacity: errors.items ? 1 : 0,
                      }}
                    >
                      {errors.items?.[idx]?.price?.message}
                    </Typography>
                  </div>
                </div>
              );
            })}
            <div className={s.formBtns}>
              <Button
                iconFirst={true}
                variant={"clean"}
                icon={<Plus />}
                type={"button"}
                onClick={() => append({ name: "", price: 0 })}
                disabled={!!errors?.items}
                className={s.inputWithError}
              >
                Lisa
              </Button>
              {fields.length > 1 && (
                <Button
                  iconFirst={true}
                  variant={"clean"}
                  icon={<Bin />}
                  type={"button"}
                  onClick={removeItemFromCalculator}
                  className={s.inputWithError}
                >
                  Kustuta
                </Button>
              )}
            </div>
          </form>
          <Typography className={s.sum}>
            Summa kokku {calculatorItemsSum()}
          </Typography>
          <Button variant={"primary"}>Taotle sisustuslaenu</Button>
          <Typography className={s.readTerms} variant={"link2"}>
            Tutvu tingimustega
          </Typography>
        </div>
      </ContainerContentWrapper>
      <Typography className={s.disclaimer}>
        <div dangerouslySetInnerHTML={{ __html: DISCLAIMER }} />
      </Typography>
    </div>
  );
};

const DISCLAIMER =
  "Sisustuslaenu pakub AS LHV Finance. Tutvu tingimustega <a href='https://www.lhv.ee/et/sisustuslaen'>lhv.ee/et/sisustuslaen</a> ja küsi nõu asjatundjalt. Krediidi kulukuse määr on 15,85% aastas järgmistel näidistingimustel: laenusumma 7500 €, intress 13,9% jäägilt aastas (fikseeritud), lepingutasu 150 €, laenu tasumise periood 60 kuud, tasumine igakuiste annuiteetmaksetena, maksete kogusumma 10 600,10 € ja tagasimaksete summa 10 450,10 €.";
