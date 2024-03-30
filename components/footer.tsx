import { Separator } from "./separator";
import { TextThin, Text } from "./styled-components";

export const Footer = () => {
  return (
    <footer className="flex justify-between mx-10 p-[5rem] bg-foreground border-text border-[1px] rounded-3xl mb-10">
      <section className="flex gap-2">
        <div className="">
          <TextThin>Strada Principala 1/A 727260</TextThin>
          <TextThin>Frumosu - Suceava - Romania </TextThin>
          <span>
            <Text className="font-semibold"> +40 753 648 045</Text>
          </span>
        </div>
        <Separator orientation="vertical" />
      </section>
      <section></section>
    </footer>
  );
};
