import { useNavigate } from "react-router-dom";
import { ProductsArray } from "../../utils/data";
import { Card, Main, ProductDiv } from "./Products.styles";

const Products = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <ProductDiv>
        {ProductsArray.map(data => {
          return (
            <Card key={data.id} onClick={() => navigate(data.path)}>
              <div>
                <img src={data.img} alt="icons" />
                <p>{data.title}</p>
              </div>
            </Card>
          );
        })}
      </ProductDiv>
    </Main>
  );
};

export default Products;
