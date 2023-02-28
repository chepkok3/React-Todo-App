import '@/styles/TodoApp.css';
import TodosHeader from '../components/TodosHeader';
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
