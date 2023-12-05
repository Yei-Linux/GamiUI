import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Button, Container, Icon, Image, Title } from "@gamiui/standard";

export const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Container
      padding="1rem"
      margin="50px 0px"
      className="min-h-[300px] flex flex-col justify-center items-center gap-5"
    >
      <Container>
        <Image
          maxWidth="200px"
          src="https://i.pinimg.com/originals/02/61/18/0261188a351ebd989dd394761403da28.jpg"
          rounded="full"
        />
      </Container>
      <Title margin="0px">
        Make <span className="text-primary font-bold">beautiful</span> websites
        with gamification
      </Title>
      <Title level="h5">Beautiful, fast and modern React UI library.</Title>
      <Container className="flex justify-center gap-3">
        <Button
          padding="1rem"
          fontWeight="semibold"
          rounded="lg"
          className="flex gap-3 max-h-[50px] !bg-primary !text-white"
          height="sm"
        >
          <span>Gettings Started </span>
          <span>😎</span>
        </Button>
        <Button
          padding="1rem"
          fontWeight="semibold"
          rounded="lg"
          className="flex gap-3 max-h-[50px] !bg-white !text-primary !border-1 !border-primary"
          height="sm"
        >
          <span>Github</span>
          <span>
            <Icon name="github" color="#494AF4" />
          </span>
        </Button>
      </Container>
    </Container>
  );
};
