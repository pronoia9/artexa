import { styled } from "styled-components";

export const ServicesCard = ({ title, subtitle, description, link, ...props }) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mb-30'>
      <Card className='art-a art-card art-service-icon-box'>
        <Wrapper className='art-service-ib-content'>
          <div>
            <h5 className='mb-15'>{title}</h5>
            <p>{description}</p>
          </div>
          <div className='art-buttons-frame'>
            <a className='art-link art-color-link art-w-chevron' href={link}>
              Order now
            </a>
          </div>
        </Wrapper>
      </Card>
    </div>
  );
};

const Card = styled.div`
  height: 100%;

  h5 {
    font-family: var(--f-primary);
    min-height: 4ch;
  }

  p {
    margin: 0;
  }

  @media (max-width: 920px) {
    h5 {
      min-height: 1ch;
    }
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
