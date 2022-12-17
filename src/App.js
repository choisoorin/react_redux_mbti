import Start from './pages/Start';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import Mbti from './pages/Mbti';
import Show from './pages/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const surveyLength = useSelector((state) => state.mbti.survey.length);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? <Start /> : page < surveyLength + 1 ? <Mbti /> : <Show />}
      </Main>
    </>
  );
}

export default App;
