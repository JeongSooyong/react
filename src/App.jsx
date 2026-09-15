import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Button from './Button.jsx';
import Counter from './Counter.jsx';
import NameInput from './NameInput.jsx';
import Greeting from './Greeting.jsx';
import TodoList from './TodoList.jsx';
import RandomJoke from './RandomJoke.jsx';
import AutoJoke from './AutoJoke.jsx';


function App() {
  return (
    <div>
      <Header />
      <p>본문</p>
      <Button label="저장하기" color="blue" />
      <Button label="삭제하기" color="red"/>
      <Counter />
      <NameInput />
      <Greeting />
      <TodoList />
      <RandomJoke />
      <AutoJoke />
      <Button label="취소" />
      <Footer />
    </div>
  );
}

export default App