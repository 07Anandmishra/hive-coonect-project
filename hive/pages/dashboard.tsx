
import '../styles/globals.css';
import TablePage from './TablePage'
import Datepickercomponent from './Datepickercomponent';

function Dashboard() {
  return (
    <>
    <div>
    <TablePage />
    </div>
    </>
    // <div className="layout">
    //   <header className="header">Header</header>
    //   <aside className="sidebar">
    //   <TablePage />
    //   </aside>
    //   <main className="body">Body</main>
    //   <footer className="footer">Footer</footer>
    // </div>
  );
}

export default Dashboard;
