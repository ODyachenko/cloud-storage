import Main from '@/components/Main/Main';
import Nav from '@/components/Nav/Nav';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="home__wrapper container">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}
