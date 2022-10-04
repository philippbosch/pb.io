import Image from "next/image";
import profilePic from "../public/images/philipp-bosch.webp";

interface LayoutProps {
  title?: string;
  children: any;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className="container mx-auto my-16 md:my-32 lg:my-48 px-8 md:px-16 space-y-24 lg:space-y-32 xl:space-y-48">
      <header className="flex items-center space-x-4 lg:space-x-8">
        <div className="w-20 h-20 lg:w-36 lg:h-36 rounded-full border-2 lg:border-4 border-gray-100 overflow-hidden relative">
          <Image src={profilePic} alt="Philipp Bosch" layout="fill" />
        </div>

        <div>
          <h1 className="text-2xl lg:text-5xl font-bold text-white">
            Philipp Bosch
          </h1>
          <h2 className="-mt-1.5 lg:mt-0 text-2xl lg:text-5xl text-gray-500">
            Software Developer
          </h2>
          <div className="mt-2 flex text-sm lg:text-lg space-x-3 lg:space-x-6">
            <div className="flex items-center space-x-1" title="Location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Berlin</span>
            </div>
            <a
              href="https://github.com/philippbosch"
              className="flex items-center space-x-1 hover:text-gray-300 transition"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="mailto:hi@pb.io"
              className="flex items-center space-x-1 hover:text-gray-300 transition"
              title="E-Mail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>hi@pb.io</span>
            </a>
          </div>
        </div>
      </header>
      <div className="space-y-16 lg:space-y-0 lg:flex lg:items-start lg:space-x-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;