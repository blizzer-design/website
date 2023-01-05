import { PropsWithChildren, type FunctionComponent } from "react";
import { Container } from "../container";
import BlizzerLogoType2 from "../logo/blizzer-logotype-2";

export type SectionProps = PropsWithChildren<{
  heading: string;
  intro: string;
  width?: "sm" | "md" | "lg" | "xl" | "2xl";
  id?: string;
}>;

const Section: FunctionComponent<SectionProps> = ({
  heading,
  intro,
  width = "lg",
  children,
  id,
}) => {
  return (
    <section id={id} className="py-32">
      <Container width={width}>
        <div className="flex justify-center mb-8" data-aos="fade-up">
          <BlizzerLogoType2 />
        </div>

        <h1
          className="text-5xl lg:text-8xl font-black text-center mb-8"
          data-aos="fade-up"
        >
          {heading}
        </h1>
        <p
          className="text-center text-gray-600 mb-24 max-w-screen-sm mx-auto"
          data-aos="fade-up"
        >
          {intro}
        </p>
        <div>{children}</div>
      </Container>
    </section>
  );
};

export default Section;
