import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }
  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme['gray-100']};

    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme['green-500']};

      transition: all 0.3s ease;
    }
    &.active {
      color: ${({ theme }) => theme['green-500']};
    }
  }
`
