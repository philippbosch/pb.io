interface H2Props {
  children: React.ReactNode;
}

const H2 = ({ children }: H2Props) => (
  <h2 className="text-xl lg:text-2xl print:text-black">{children}</h2>
);

export default H2;
