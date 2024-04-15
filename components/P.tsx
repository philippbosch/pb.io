interface PProps {
  children: React.ReactNode;
}

const P = ({ children }: PProps) => (
  <p className="text-lg lg:text-xl lg:leading-8 hyphens-auto sm:hyphens-none">
    {children}
  </p>
);

export default P;
