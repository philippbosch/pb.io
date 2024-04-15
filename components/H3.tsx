interface H3Props {
  children: React.ReactNode;
}

const H3 = ({ children }: H3Props) => (
  <h3 className="text-gray-200 print:text-black all-small-caps font-bold tracking-wider lg:text-lg">
    {children}
  </h3>
);

export default H3;
