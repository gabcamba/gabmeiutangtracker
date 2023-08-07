import { useEffect, useState } from "react";
import "./App.css";
import UtangModal from "./components/UtangModal";
import AddUtangButton from "./components/AddUtangButton";
import SummaryView from "./components/SummaryView";
import Header from "./components/Header";
import ListView from "./components/ListView";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCjeAOGDc8rfr4iXDwv6PJOW1DgiRVg_vY",
    authDomain: "gabmeiutangtracker.firebaseapp.com",
    projectId: "gabmeiutangtracker",
    storageBucket: "gabmeiutangtracker.appspot.com",
    messagingSenderId: "106272820454",
    appId: "1:106272820454:web:1e149c5737b798dec23f27",
    measurementId: "G-XZ55EL9DGS",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    fetchUtangs();
  }, []);

  const fetchUtangs = async () => {
    await getDocs(collection(db, "UTANG")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUtangs(newData);
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [utangs, setUtangs] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        style={{
          height: "97vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="App"
      >
        <Header />
        <SummaryView />
        <ListView utangs={utangs} />
        <AddUtangButton toggleModal={toggleModal} />
      </div>
      {isModalOpen && <UtangModal />}
    </>
  );
}

export default App;
