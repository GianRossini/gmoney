import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    color: #ffffff;
    background: var(--blue-light);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;