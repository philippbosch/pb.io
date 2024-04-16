interface AProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
}

const A = ({ children, ...props }: AProps) => (
  <a
    className="underline decoration-gray-600 hover:text-white hover:decoration-white transition-all"
    {...props}
  >
    {children}
  </a>
);

export default A;
