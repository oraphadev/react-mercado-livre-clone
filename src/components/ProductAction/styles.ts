import styled from 'styled-components';
import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

export const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);

  @media screen and (min-width: 996px) {
    border-top: none;
  }
`;

export const Condition = styled.div`
  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  height: 28px;
  width: 28px;
  flex-shrink: 0;
  color: var(--color-blue);
  margin-left: 16px;
  cursor: pointer;
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  background: var(--color-blue);
  color: var(--color-white);
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

export const MethodCard = styled.div`
  margin-top: 18px;
  display: flex;

  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .title {
      color: var(--color-green);
      font-size: 16px;
    }

    .details {
      margin-top: 5px;
      color: var(--color-gray);
      font-size: 14px;
    }

    .more {
      margin-top: 5px;
      color: var(--color-blue);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  color: var(--color-green);
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;
  cursor: pointer;

  color: ${(props) => (props.solid ? 'var(--color-white)' : 'var(--color-blue)')};
  background: ${(props) => (props.solid ? 'var(--color-blue)' : 'transparent')};
  border: ${(props) => (props.solid ? 'none' : '1px solid var(--color-blue)')};
`;

export const Benefits = styled.ul`
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;

    > p {
      margin-left: 10px;
      color: var(--color-gray);
      font-size: 14px;
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  color: var(--color-gray);
`;
