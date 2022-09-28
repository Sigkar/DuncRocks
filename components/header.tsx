import styled from "styled-components";

const LINKS: Array<{ href: string; title: string; key: string }> = [
  {
    href: "/",
    title: "Home",
    key: "home",
  },
  {
    href: "/about",
    title: "About",
    key: "about",
  },
  {
    href: "/gallery",
    title: "My Work",
    key: "mywork",
  },
];

const HeaderContainer = styled.header`
  position: sticky;
  top:0px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 3px solid #f0f0f0;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: right;
  gap: 32px;
  a {
    text-decoration: none;
    ${({ theme }) => ({
      ...theme.typography.headerBold,
      color: theme.colors.lightGreen,
    })}
    &:hover {
      text-decoration: underline;
    }
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        {LINKS.map(({ href, title, key }) => (
          <a key={key} href={href}>
            {title}
          </a>
        ))}
      </NavContainer>
    </HeaderContainer>
  );
}
