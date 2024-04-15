interface H1Props {
  children: React.ReactNode;
}

const H1 = ({ children }: H1Props) => (
  <h1 className="text-2xl lg:text-3xl text-white print:text-black">
    {children}
  </h1>
);

export default H1;
