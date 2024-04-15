interface PProps {
  children: React.ReactNode;
}

const P = ({ children }: PProps) => (
  <p className="text-lg hyphens-auto _sm:hyphens-none">{children}</p>
);

export default P;
