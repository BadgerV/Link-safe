import {
  BodyText,
  Container,
  Content,
  ContentWrapper,
  Header,
  ImageDiv,
  MainText,
  SecondTitle,
  Title
} from "./Body.styles";

const Body = () => {
  return (
    <>
      <Container>
        <Header>
          <MainText>Our Services</MainText>
        </Header>

        <BodyText>
          <Content>
            <div>
              <img src="/assets/bank.png" alt="bank" />
              <ContentWrapper>
                <Title>Credit Bank Accounts</Title>
                <p>
                  Send money from anywhere to the recipient's local bank account. They'll receive
                  funds in the local currency too.
                </p>
              </ContentWrapper>
            </div>
            <div>
              <img src="/assets/svg/africa.svg" alt="usdc" />
              <ContentWrapper>
                <SecondTitle>Pay different bills across Africa</SecondTitle>
                <p>
                  Pay over 17,000 bills spanning across electricity, airtime, internet and cable TV
                  across Africa
                </p>
              </ContentWrapper>
            </div>
          </Content>
        </BodyText>
      </Container>
      <Container>
        <ImageDiv src="/assets/services.png" alt="items" />
        {/* <ButtonWrap>
        <Link to="/dashboard">
            <Button title="Pay Bills"/>
        </Link>
        </ButtonWrap> */}
      </Container>
    </>
  );
};

export default Body;
