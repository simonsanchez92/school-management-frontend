import "./App.css";

// import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <Sidebar />
      <main className="page-wrapper">
        <h1>main page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum
          voluptate debitis qui labore non libero quos facere nesciunt soluta
          minima, consequatur aperiam voluptas explicabo. Natus temporibus
          quibusdam, fugiat odio minima nihil? Quibusdam blanditiis dignissimos
          molestias omnis autem consequuntur velit tenetur, voluptatibus dolor
          excepturi quaerat iste architecto ipsam? Facere modi dolorem
          voluptates debitis iure doloremque blanditiis soluta, dolorum cumque
          molestias sint asperiores quos! Ab placeat quae ut? Distinctio magni,
          officiis totam a neque, expedita assumenda eligendi et voluptatibus
          dolorum veritatis officia suscipit, porro dolores cumque magnam
          aspernatur optio unde eius eum. Sit dicta quasi numquam sequi debitis,
          id nobis fugiat ratione deserunt blanditiis esse! Vel vero consequatur
          atque dolorem assumenda ab debitis, sunt error impedit ut porro
          voluptate iste eum. Nam perspiciatis non quis repudiandae maiores
          ipsa, consectetur officia amet possimus voluptas veritatis ipsum
          libero sapiente consequuntur obcaecati praesentium dolorem quasi quas
          facere id soluta expedita asperiores voluptatibus est! Quasi, placeat
          dolorem hic eius nemo animi beatae officiis illo quaerat inventore
          impedit repellendus alias exercitationem, architecto reiciendis
          dignissimos totam. Ex voluptate, aperiam reiciendis quod nostrum
          eveniet sequi consequuntur soluta, explicabo ipsa iure deleniti itaque
          quo possimus voluptates, pariatur neque velit amet dolorum veritatis.
          Rem perspiciatis consectetur, totam ut vitae deleniti.
        </p>
      </main>
    </div>
  );
};

export default App;
