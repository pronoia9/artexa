import { styled } from 'styled-components';

export const Title = (props) => (
  <TitleContainer className='art-section-title'>
    <TitleFrame className='art-title-frame'>
      <h2>{props.title}</h2>
    </TitleFrame>
    {props.children}
  </TitleContainer>
);

export const SectionTitle = ({ column = 1, title, rightTitle, rightClass }) => (
  <div className={`col-lg-${12 / column}`}>
    <Title title={title}>
      {rightTitle && (
        <TitleRightFrame className='art-right-frame'>
          <div className={rightClass}>{rightTitle}</div>
        </TitleRightFrame>
      )}
    </Title>
  </div>
);

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const TitleFrame = styled.div`
  align-self: center;
  position: relative;
  margin-bottom: 30px;
`;

const TitleRightFrame = styled.div`
  padding-bottom: 30px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 500px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
