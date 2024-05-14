import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, classname }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        classname
      )}
    >
      {children}
    </div>
  );
};

export const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        {/* <div className=" custom-bg p-8 rounded-xl flex items-center justify-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
          sapiente explicabo. Nostrum obcaecati nam ea modi vero maxime corrupti
          odio?
        </div> */}
        <ItemLayout classname={"col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-left text-2xl w-full capitalize">
            Frontend Developer
          </h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nesciunt ad reprehenderit consequatur voluptatem, quia odio officia
            et hic facere dolorem dolorum labore incidunt officiis repellendus
            magnam excepturi quae, eos quibusdam enim eaque deleniti libero
            quaerat! Temporibus nesciunt illo corporis fuga ratione magnam,
            fugiat obcaecati quam aperiam voluptatem maxime. Cupiditate, nam,
            ipsum possimus rerum architecto incidunt dolor eos quia ducimus quam
            aspernatur mollitia, veniam assumenda earum consectetur? Molestias
            vero, quidem cupiditate minus sint facere exercitationem autem
            dolorem, optio molestiae fuga veritatis, velit dolores quisquam iure
            minima! Doloremque totam, deleniti, nulla ducimus corrupti expedita
            consequatur ullam laborum mollitia et soluta excepturi.
          </p>
        </ItemLayout>
        <ItemLayout classname={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            25+ <sub className="font-semibold text-base"> clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout classname={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            3+{" "}
            <sub className="font-semibold text-base"> years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout classname={"col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=rodycastillo&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="RodyCastillo"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout classname={"col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=rodycastillo&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="RodyCastillo"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout classname={"col-span-full !p-6"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,wasm,react,angular,typescript,pug,nuxtjs,express,mongodb,mui,redux,sass,tailwind,vue,nextjs,nodejs,git,aws,vite,vscode,yarn,supabase"
            alt="Technologies"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout classname={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=rodycastillo&theme=dark&hide_border=true&type=png&background=EB545400"
            alt="Technologies"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout classname={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin?username=rodycastillo&repo=calculator-RN&theme=transparent&hide_border=true&type=png&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Technologies"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};
