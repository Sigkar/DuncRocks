import { Header } from "./";
export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
