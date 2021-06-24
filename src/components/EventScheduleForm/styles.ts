import styled from 'styled-components';

export const Main = styled.div`
  margin: 5rem 5%;

  > div {
    margin-bottom: 3rem;

    > h2 {
      font-size: 2.9rem;
      text-transform: none;
      font-family: 'Crimson Semibold';
    }
  }

  @media (min-width: 738px) {
    display: flex;
    margin: 6rem 5%;

    > div {
      margin: 1rem 3rem;
    }
  }

  @media (min-width: 992px) {
    margin: 7rem 5%;
  }

  .form {
    > input {
      margin-bottom: 1.3rem;
    }

    > label {
      opacity: 0.6;
      display: none;
    }

    > span {
      font-size: 0.9em;
      margin-left: 1rem;
      text-align: center;
      color: var(--color-error);
    }
  }
`;

export const CalendarContainer = styled.div`

  > h3 {
    font-size: 1.3em;
    text-align: center;
    margin-bottom: 0.3rem;
    padding: 1rem;
  }
  
  > span {
    font-size: 0.9em;
    margin-left: 1rem;
    text-align: center;
    color: var(--color-error);
  }

  > h3 svg {
    width: 1.2rem;
  }

  .ogolfim {
    width: 100%;
    height: 30rem;
    background: var(--color-primary);
    color: var(--color-white);
    font-family: 'Crimson Roman', 'Gentium Plus', sans-serif;
    letter-spacing: 0.02em;
  }

  .ogolfim >.react-calendar__navigation {
    background: var(--color-blue); 
    padding: 0 .7rem; 
  }

  .ogolfim >.react-calendar__navigation > button {
    color: var(--color-white);
    background-color: transparent;
    min-width: 4.4rem;
    min-height: 4.4rem;
    border: none;
  }

  .ogolfim > .react-calendar__navigation button:enabled:hover,
  .ogolfim > .react-calendar__navigation button:enabled:focus {
    background-color: transparent;
    color: var(--color-white);
    cursor: pointer;
  }

  .ogolfim > .react-calendar__navigation button[disabled] {
    background-color: transparent;
  }

  .ogolfim >.react-calendar__navigation > .react-calendar__navigation__label > span {
    text-transform: uppercase;
    font-family: 'Crimson Roman', 'Gentium Plus', sans-serif;
  }

  .ogolfim .react-calendar__navigation .react-calendar__navigation__arrow {
    font-size: 0.9em;
  }

  .ogolfim .react-calendar__navigation .react-calendar__navigation__arrow:enabled:hover,
  .ogolfim .react-calendar__navigation .react-calendar__navigation__arrow:enabled:focus {
    background: var(--color-blue); 
    font-size: 1.6em;
  }

  .ogolfim .react-calendar__navigation .react-calendar__navigation__arrow[disabled] {
    background: var(--color-blue);
    font-size: 1.6em;
  }

  .ogolfim .react-calendar__viewContainer {
    padding: .6rem .7rem;
  }

  .ogolfim .react-calendar__viewContainer .react-calendar__month-view__weekdays {
    text-transform: capitalize;
    font-weight: normal;
    text-align: center;
    font-family: 'Crimson Roman', 'Gentium Plus', sans-serif;
  }

  .ogolfim .react-calendar__viewContainer .react-calendar__month-view__weekdays__weekday abbr{
    text-decoration: none;
  }

  .ogolfim .react-calendar__viewContainer div > button {
    font-family: 'Crimson Roman', 'Gentium Plus', sans-serif;
    color: var(--color-white);
    background-color: transparent;
    border: none;
    padding: 0.8rem;
  }

  .ogolfim .react-calendar__viewContainer div > button:hover {
    cursor: pointer;
  }

  .ogolfim .react-calendar__viewContainer div > button abbr {
    font-size: 0.9em;
  }

  .ogolfim .react-calendar__tile--active {
    background: var(--color-yellow);
  }

  .ogolfim .react-calendar__tile--active:enabled:hover,
  .ogolfim .react-calendar__tile--active:enabled:focus {
    background: var(--color-yellow);
  }

  .ogolfim .react-calendar__decade-view__years__year:hover,
  .ogolfim .react-calendar__year-view__months__month:hover,
  .ogolfim .react-calendar__month-view__days__day:hover {
    border: .07rem solid var(--color-yellow);
    background-color: transparent;
  }

  .ogolfim .react-calendar__tile--now {
    background: rgba(255, 165, 0, 0.2);
  }

  .ogolfim .react-calendar__tile--now:enabled:hover,
  .ogolfim .react-calendar__tile--now:enabled:focus {
    background: var(--color-yellow);
  }
`;