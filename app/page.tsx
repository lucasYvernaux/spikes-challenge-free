//  Pense à lire le README.MD avant de commencer !
import { Card } from "@/components/card";
import { GridPattern } from "../public/grid-pattern";
import { SpikesIcon } from "../public/spikes_icon";
import { Caroussel } from "@/components/caroussel";

export default function Home() {
  const listCard: {
    numImg?: number;
    name: string;
    usename?: string;
    paragraph?: string;
  }[] = [
    {
      name: "Shoguntoto",
      usename: "thomasdev59",
      paragraph:
        "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles.",
    },
    {
      name: "Shoguntoto",
      usename: "thomasdev59",
      paragraph:
        "Ezis répond à toutes les questions afin de nous aider le plus possible dans notre objectif.",
    },
    {
      name: "Hocine",
      usename: "hocine",
      paragraph:
        "J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions.",
    },
    {
      name: "Youtmax654",
      usename: "youtmax654",
      paragraph:
        "Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de traviller sur un projet.",
    },
    {
      name: "Baptiste",
      usename: "baptiste_lechat",
      paragraph:
        "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.",
    },
    {
      name: "Eihposenna",
      usename: "eihposenna",
      paragraph:
        "Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes.",
    },
    {
      name: "Le D",
      usename: "sport_devweb",
      paragraph:
        "Le fait d'avoir accès à un discord et une communauté fait vraiment la différence.",
    },
  ];

  const listCard2: {
    numImg?: number;
    name: string;
    usename?: string;
    paragraph?: string;
  }[] = [
    {
      name: "Shoguntoto",
      usename: "thomasdev59",
      paragraph:
        "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.",
    },
    {
      name: "Lois",
      usename: "loisglld",
      paragraph:
        "Je suis surpris de la qualité des ressources et de la pertinence du contenu pour lequel je me suis abonné !",
    },
    {
      name: "Youtmax654",
      usename: "youtmax654",
      paragraph:
        "Cette idée de challenges est de loin la meilleure que j'ai pu trouver sur internet parmi mes recherches.",
    },
    {
      name: "LucasQust",
      usename: "LucasQust",
      paragraph:
        "C’est vraiment lourd, les challenges sont cool, l’environnement qu’Ezis à mit en place est top !",
    },
    {
      name: "Jojok63",
      usename: "jojok_63",
      paragraph:
        "Une communauté très réactive, toujours prête à vous aider quelque soit le sujet.",
    },
    {
      name: "Eihposenna",
      usename: "eihposenna",
      paragraph:
        "Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes.",
    },
    {
      name: "Shoguntoto",
      usename: "thomasdev59",
      paragraph:
        "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles.",
    },
  ];
  return (
    <main className="w-screen h-screen">
      {/*Tu peux commencer à coder ici ! */}
      <GridPattern style={{ transform: "rotate(180deg)" }} className="h-fit" />
      <section className="w-screen h-screen absolute top-0">
        <header className="h-1/6 w-full flex flex-col">
          <h1 className="flex h-full flex-wrap place-content-center font-aeonik text-2xl">
            <SpikesIcon className="mr-3" />
            Spikes
          </h1>
        </header>

        <div className="h-4/6 flex flex-wrap items-center font-aeonik overflow-hidden">
          <div
            className="w-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(0,0,0,0.8), transparent 20%),linear-gradient(270deg, rgb(0,0,0,0.8), transparent 20%)",
            }}
          >
            <Caroussel listAllCard={listCard} animationSlide={"left"} />
            <Caroussel listAllCard={listCard2} animationSlide={"right"} />
          </div>
        </div>
        <footer className="h-1/6 w-full flex flex-col">
          <a className="flex place-content-center m-auto rounded-full border px-6 text-base leading-8 font-medium">
            www.spikes.dev
            <img src="./arrow-right.svg" className="ps-3" />
          </a>
        </footer>
      </section>

      <GridPattern className="h-fit bottom-0 absolute" />
    </main>
  );
}
