import TodosHeader from '../components/Header';
import TodosLogic from '../components/TodosLogic';

const Home = () => (
  <section className="todos">
    <div className="container">
      <TodosHeader />
      <TodosLogic />
    </div>
  </section>
);
export default Home;
