import { FunctionComponent } from "react";

type CardProps = {
  numImage?: number;
  name?: string;
  username?: string;
  paragraph?: string;
};

export const Card: FunctionComponent<CardProps> = ({
  numImage = 1,
  name = "Hocine",
  username = "hocine",
  paragraph = "J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions.",
}) => {
  const urlImage = "./profile-picture/picture-" + numImage + ".webp";
  return (
    <>
      <div
        className="w-72 h-40 rounded-xl border opacity-100 py-4 px-6 z-0"
        style={{
          backgroundColor: "#0C0024",
          minWidth: "287px",
          minHeight: "160px",
          boxShadow: "0px -4px 44px 0px rgba(69, 52, 105, 0.1) inset",
        }}
      >
        <div className="head flex flew-row mb-2.5">
          <img src={urlImage} className="w-8 h-8 mr-2" />
          <div className="flex flex-col">
            <p className="text-sm font-medium">{name}</p>
            <p
              style={{ fontSize: "10px", lineHeight: "16px", color: "#807FBC" }}
            >
              @{username}
            </p>
          </div>
        </div>
        <div className="content font-aeonik text-sm">{paragraph}</div>
      </div>
    </>
  );
};
