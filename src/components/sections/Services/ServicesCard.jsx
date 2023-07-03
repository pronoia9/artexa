import { styled } from "styled-components";

export const ServicesCard = ({ title, subtitle, description, link, ...props }) => {
  return (
    <div className='col-lg-4 col-md-6'>
      <Card className='art-a art-card art-service-icon-box'>
        <Wrapper className='art-service-ib-content'>
          <div>
            <h5 className='mb-15'>{title}</h5>
            <div className='mb-15'>{description}</div>
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
  height: 260px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;