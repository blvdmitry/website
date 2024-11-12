import { Container as RSContainer } from "reshaped";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  const { children } = props;

  return <RSContainer width="600px">{children}</RSContainer>;
};

export default Container;
