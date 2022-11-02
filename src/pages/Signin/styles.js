import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.625rem;
    height: 100vh;
`;

export const Content = styled.div`
    gap: 0.9375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 21.875rem;
    box-shadow: 0 1px 2px var(--shadow);
    padding: 1.25rem;
    border-radius: 5px;

    background-color:var(--container);
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: var(--label);
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    color: var(--label);
`

export const labelError = styled.label`
    font-size: 14px;
    color: var(--error);
`

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: var(--label);
    }
`