import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data))
  }, []);

  function handleDelete(listingToDelete) {
    fetch(`http://localhost:6001/listings/${listingToDelete.id}`, {
      method: "DELETE"
    })
    .then(setListings(listings.filter(listing => listing !== listingToDelete)))
  }

  function handleSearch(searchQuery) {
    setListings(listings.filter(listing => listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    ))
  }

  return (
    <div className="app">
      <Header onHandleSearch={handleSearch} />
      <ListingsContainer listings={listings} onHandleDelete={handleDelete} />
    </div>
  );
}

export default App;
