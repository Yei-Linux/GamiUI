import clsx from "clsx";
import Heading from "@theme/Heading";
import { Image } from "@gamiui/standard";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    src: "https://i.pinimg.com/550x/1b/31/7c/1b317c42cff3e28a2b5ebc05f1f0daa4.jpg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    src: "https://media.istockphoto.com/id/1221591976/sv/vektor/rolig-busig-tecknad-hj%C3%A4rnfigur.jpg?s=170667a&w=0&k=20&c=j-SuJ-C9SYpQfykKO7oteWoJpa0IqlFEBotqncaM5k0=",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    src: "https://clipart-library.com/2023/pink-color-smile-brain-weights-white-background-very-strong-cartoon-brain-concept_761284-79.jpg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx("flex flex-col gap-3 items-center max-w-[300px]")}>
      <div className="text-center">
        <Image width="100px" height="100px" src={src} rounded="full" />
      </div>
      <div className="flex flex-col gap-3 items-center">
        <Heading as="h2" className="font-bold text-[20px] text-primary">
          {title}
        </Heading>
        <p className="text-center leading-6">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div className="flex flex-wrap justify-between gap-3 w-full px-5 max-w-[1300px] m-auto">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
