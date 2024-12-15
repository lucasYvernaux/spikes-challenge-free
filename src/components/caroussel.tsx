import { FunctionComponent } from "react";
import { Card } from "./card";

type CarousselProps = {
  listAllCard: {
    numImg?: number;
    name: string;
    usename?: string;
    paragraph?: string;
  }[];
  animationSlide: string;
  props?: any;
};

export const Caroussel: FunctionComponent<CarousselProps> = ({
  listAllCard,
  animationSlide,
  props,
}) => {
  let slide;
  if (animationSlide.length > 1) {
    switch (animationSlide) {
      case "left":
        slide = { animation: `10s infinite alternate slideleft linear` };
        break;
      case "right":
        slide = { animation: `10s infinite alternate slideright linear` };
        break;
      default:
        slide = undefined;
    }
  }

  return (
    <div
      className="w-4/5 flex gap-3 -z-10 relative my-4 sm:mt-0 sm:mb-4"
      style={slide}
      {...props}
    >
      {listAllCard.map((card, index) => (
        <Card
          numImage={card.numImg ? card.numImg : index + 1}
          name={card.name}
          paragraph={card.paragraph}
        />
      ))}
    </div>
  );
};
