import styled from 'styled-components';
import Items from './Items';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px){
   width: 100%
   padding-left: 1rem;
   padding-right: 1rem; 
  }
`;

const article = {
  title: 'Title',
  description: 'Contents',
  url: 'http:naver.com',
  urlToImage:
    'https://imgnews.pstatic.net/image/088/2022/08/15/0000770832_001_20220815140801308.jpg?type=w647',
};

const ItemList = () => {
  return (
    <NewsListBlock>
      <Items article={article} />
      <Items article={article} />
      <Items article={article} />
      <Items article={article} />
      <Items article={article} />
      <Items article={article} />
      <Items article={article} />
    </NewsListBlock>
  );
};

export default ItemList;
