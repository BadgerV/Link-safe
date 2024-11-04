import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .contain {
    position: relative;
    width: 650px;
    font-family: var(--font-family-nista);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 340px;
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;
    background: linear-gradient(131deg, #409099 0%, #84e681 100%), #000;
    @media screen and (max-width: 680px) {
      width: 550px;
    }
    @media screen and (max-width: 570px) {
      width: 450px;
      margin-bottom: 2rem;
    }
    @media screen and (max-width: 470px) {
      width: 350px;
    }
    @media screen and (max-width: 430px) {
      width: 300px;
    }
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
    line-height: 2.5rem;
    font-family: var(--font-family-nista);
    @media screen and (max-width: 500px) {
      font-size: 20px;
      ine-height: 1.7rem;
    }
    @media screen and (max-width: 570px) {
      font-size: 18px;
    }
  }
  .Goto {
    outline: none;
    padding: 0.8rem 2rem;
    background-color: white;
    color: #409099;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 1rem;
    @media screen and (max-width: 425px) {
      font-size: 0.78rem;
    }
  }
  .end {
    margin-top: 3rem;
    font-size: 0.8rem;
  }
  .paper {
    position: absolute;
    top: 1rem;
    right: -4rem;
    img {
      width: 8rem;
      @media screen and (max-width: 680px) {
        width: 5rem;
      }
    }
    @media screen and (max-width: 680px) {
      right: -2.3rem;
    }
  }
  .home {
    position: absolute;
    top: 10rem;
    left: -4rem;
    img {
      width: 8rem;
      @media screen and (max-width: 680px) {
        width: 5rem;
      }
    }
    @media screen and (max-width: 680px) {
      left: -2.3rem;
    }
  }
`;
// export const ButtonWrap = styled.div`
//   position: absolute;
//   top: 10rem;
//   left: 5.5rem;
//   display: flex;
//   gap: 0.4rem;
// `;
// export const ButtonImage = styled.img`
//   cursor: pointer;
//   height: 87px  !important;
//   width: 150px  !important;
//   @media screen and(max-width:500px){
//     height:87px !important;
//     width: 15px !important:
//   }
// `;
// export const TextStyle = styled.p`
//   font-family: Sora-Regular, sans-serif;
//   color: #fff;
//   font-size: 25px;
//   font-weight: 700 !important;
// `;
// export const TextWrap = styled.div`

//    display:flex;
//    text-wrap: wrap;
//    flex-direction:column;
//    justify-content:center;
//    align-items:center;
//    background-color:blue;
// `;

// export const Background = styled.div`
//     width: 100%;
//     height:400px
//     position;relative;
//     border-top-left-radius: 29px;
//     border-top-right-radius: 29px;
//     background: linear-gradient(131deg, #409099 0%, #84E681 100%), #000;

//     Img{
//       position:absolute;
//       width:3rem;
//       top:4rem;

//     }
// `;

// export const PaperImg = styled.img`

//   left: 56.45rem !important;
//   top: -9rem !important;
//   width: 120px !important;
//   height: 120px;
//   transform: rotate(-15deg);
//   flex-shrink: 0;
// `;
