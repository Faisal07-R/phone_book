// src/App.tsx
import React from "react";
import { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactList from "../public/component/ContactList";
import FavoriteContacts from "../public/component/FavoriteContacts";
import Pagination from "../public/component/Pagination";
import SearchBar from "../public/component/searchBar";
import AddContactForm from "../public/component/AddContactForm";
import EditContactForm from "../public/component/EditContactForm";

const client = new ApolloClient({
  uri: "https://web-tools.tokopedia.com/postgres/v1/graphql",
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  const [contacts, setContacts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleAddContact = (firstName, lastName, phone) => {
    const newContact = { firstName, lastName, phone };
    setContacts([...contacts, newContact]);
  };
  const handleSearch = (searchTerm) => {
    const filteredContacts = contacts.filter((contact) => contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(filteredContacts);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <nav style={navStyle}>
            <ul className="nav" style={navListStyle}>
              <li style={navItemStyle}>
                <Link to="/" style={navLinkStyle}>
                  Daftar Kontak
                </Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/favorites" style={navLinkStyle}>
                  Kontak Favorit
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/favorites" element={<FavoriteContacts />} />
            <Route
              path="/"
              element={
                <>
                  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
                  <SearchBar onSearch={handleSearch} />
                  <AddContactForm onAddContact={handleAddContact} />
                  <ContactList contacts={searchResults.length > 0 ? searchResults : contacts} />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

const navStyle = {
  backgroundColor: "#007bff",
  padding: "10px",
};

const navListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
};

const navItemStyle = {
  marginRight: "10px",
};

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "18px",
};

export default App;
