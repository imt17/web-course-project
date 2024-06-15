import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'; 
import CityData from './component-ajax';
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to New York</h1>
        <a href='./login.html'>login</a>
        <a href='./quiz.html'>quiz</a>

      </header>
      <div className="container">
        <div className="content">
          <h2>Нью-Йорк</h2>
          <p>
          Нью-Йорк — один із найбільших у світі торговельно-фінансових центрів (Нью-Йоркська фондова біржа, транснаціональні корпорації); великий промисловий центр (одяг, поліграфія, транспортні засоби, харчові продукти) США та Північної Америки; конгломератом портів Нью-Йорк сполучений системою каналів з Великими Озерами; великий транспортний вузол (авіатранспорт); численні вищі школи (Колумбійський університет); Метрополітен Опера; великі парки (Централ-парк); головна частина міста — Мангеттен; музеї, мистецькі галереї; пам'ятки архітектури XVII та XIX століть; численні хмарочоси, переважно на Мангеттені; багато пам'ятників (зокрема Т. Шевченкові в Арров-парку); Статуя Свободи. У Нью-Йорку розташовано штаб-квартиру ООН.

За результатами опитування, що провів журнал Forbes серед фахівців 2010 року, Нью-Йорк потрапив до дванадцятки найкрасивіших міст світу.


          </p>
  <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/NYC_Montage_2014_4_-_Jleon.jpg/1280px-NYC_Montage_2014_4_-_Jleon.jpg" 
  alt="New York City"
  class="city-image"
/>
<CityData />

        </div>
        <div className="footer">
          <p>&copy; 2024 New York Information</p>
        </div>
      </div>
    </div>
  );
}

export default App;

