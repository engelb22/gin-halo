import { useState } from "react";

function App() {
  const allDrinks = [
    {
      name: "Galaxy",
      img: "https://scontent.fhnl1-1.fna.fbcdn.net/v/t1.15752-9/426351599_378395061569550_144705381892529544_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=8X7kKm8B7rsAX85gJYj&_nc_ht=scontent.fhnl1-1.fna&oh=03_AdR3F8Nz7_cq4MaHHm7Sr1Hio4a7yzSlPRw6xB1LEezBrg&oe=65F1A3A5",
      description:
        "Experience an absolute astonishing experience with this out-of-the-world blend of flavors.",
      ingredients: ["Gin", "Gatorade", "Sprite", "Grapes Juice"],
    },
    {
      name: "Velocity",
      img: "https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDIxXC8wNlwvMDkxMDUwMDhcL1ZlbG9jaXR5LUZpbGlwaW5vLUNvY2t0YWlsLmpwZyIsImJ1Y2tldCI6ImJvb2t5cmVwb3J0IiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOiI3NzAifX19",
      description:
        "The name might have come from the color of this drink or maybe on how fast you can consume this drink. But either way, this concoction is certainly something you should try.",
      ingredients: ["Gin", "Gatorade", "Sprite", "Lemon"],
    },
    {
      name: "Gin Pom",
      img: "https://drinkmanila.com/wp-content/uploads/2016/07/center-Classy-Gin-Pom-2.jpg",
      description:
        "Easily the most popular Pinoy cocktail, this drink is refreshingly sweet and tangy on a hot summer day. ",
      ingredients: [
        "1 bottle gin bilog",
        "1 sachet powdered pomelo juice",
        "1 liter water",
      ],
    },
    {
      name: "Weng Weng",
      img: "https://drinkmanila.com/wp-content/uploads/2016/11/Wengweng-fin.jpg",
      description:
        "Loved (and hated) by college kids, this cocktail is a concoction of not not one, not two, but 5 different spirits. Drink a glass straight up and you just might end up hearing sirens in your head that sound like “weeeng weeeng”. ",
      ingredients: [
        "2 shots gin bilog",
        "2 shots vodka",
        "2 shots rum",
        "2 shots brandy",
        "2 shots grenadine syrup ",
        "1 cup orange juice",
        "1 cup pineapple juice",
      ],
    },
    {
      name: "Shembot",
      img: "https://opendrinks.io/img/shembot.9159eb2f.jpg",
      description:
        "Ready for a night of dancing? This drink -- a mix of caffeine, sugar, and alcohol -- will definitely give you the energy to kembot the night away.",
      ingredients: [
        "1 bottle gin bilog",
        "1 sachet melon juice powder",
        "1 sachet 3-in-1 coffee mix",
        "Dash of strawberry syrup, optional",
      ],
    },
    {
      name: "Expired",
      img: "https://sih.booky.ph/eyJrZXkiOiJibG9nXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDIxXC8wNlwvMDkxMDQ1NTRcL0V4cGlyZWQtRmlsaXBpbm8tQ29ja3RhaWwuanBnIiwiYnVja2V0IjoiYm9va3lyZXBvcnQiLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6Ijc3MCJ9fX0=",
      description:
        "This drink does not require you to use expired or old ingredients, but what it can do though is leave you ‘expired’ quite early into the night. ",
      ingredients: [
        "2 bottles beer",
        "1 bottle gin bilog ",
        "2 menthol hard candies",
      ],
    },
    {
      name: "Destroso",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596031347/blog/jyq7dxxjecqkutowrj3s.webp",
      description:
        "Inspired by a Spanish word which means “destruction”, this cocktail will without a doubt leave you destroyed if you don’t watch how much you drink.",
      ingredients: [
        "1 bottle Red Horse",
        "1 bottle gin bilog",
        "1 sachet powdered pineapple juice ",
        "2 sachets powdered grape juice",
      ],
    },
    {
      name: "RPG",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596031341/blog/tyh3t2iwreevkrjfwyhm.webp",
      description:
        "The name of this cocktail might as well mean Rated Parental Guidance because any child can easily mistake this drink for an unassuming pineapple juice, when it, in fact, has two very strong alcoholic ingredients mixed in. ",
      ingredients: [
        "1 bottle Red Horse ",
        "1 bottle gin bilog ",
        "1 500 ml canned pineapple juice",
      ],
    },
    {
      name: "Kisay",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596031339/blog/v4cvnh46pztiru7rfgex.webp",
      description:
        "A mix of lime soda and calamansi gives this drink a nice sour kick and while it won’t necessarily give you convulsions -- aka what the drink is called in english -- it will definitely leave a tangy yummy shiver down your spine. ",
      ingredients: [
        "1 bottle Red Horse",
        "1 bottle gin bilog",
        "1 liter Sprite",
        "3 to 4 pieces calamansi, juiced ",
      ],
    },
    {
      name: "Red Alert",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596031339/blog/dnff1zbjsn0dj3os1bt7.webp",
      description:
        "Not only does the bright red color of this drink give its name but also does its amount of caffeine that will keep you alert all day and night. Apart from its bright red color, this cocktail also lends its name to the exact feeling you’ll get after drinking an energy drink. This one’s sure to keep you up and alert day and night. ",
      ingredients: [
        "1 bottle gin bilog",
        "1 bottle red Sting energy drink",
        "1 sachet orange juice powder",
        "1 liter water",
      ],
    },
    {
      name: "Tia Maria's Zombie",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596031334/blog/spgtubn59b5f23whqdaf.webp",
      description:
        "Zombie cocktails are made using rum but this Pinoy version of course uses the Filipino-loved Gin Bilog instead and takes flavor inspiration from the refreshing Jamaican liquor, Tia Maria. ",
      ingredients: [
        "1 bottle gin bilog",
        "1 500ml Sprite",
        "1 pack strawberry flavored juice (Zesto) ",
      ],
    },
    {
      name: "Toma Collins",
      img: "https://drinkmanila.com/wp-content/uploads/2016/12/@low-Toma-Collins-hi-res.jpg",
      description:
        "A Pinoy take to the American cocktail, Tom Collins, this drink swaps the lemon for a more local flavor: calamansi. Another local spin is done on the name of the cocktail, using the Filipino slang term ‘Toma’ instead of Tom, which means ‘to drink’. ",
      ingredients: [
        "1.5 part gin bilog (infused with cucumber)",
        "1 part calamansi juice",
        "1 part honey syrup (equal parts water and honey)",
        "1 to 2 parts tonic water",
        "8 mint leaves ",
      ],
    },
  ];

  const [selected, setSelected] = useState("Galaxy");

  return (
    <div className="App">
      <Header />
      <Sidebar
        allDrinks={allDrinks}
        selected={selected}
        setSelected={setSelected}
      />
      <Main selected={selected} allDrinks={allDrinks} />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header>
      <div>🍸 GIN HALO</div>
    </header>
  );
}

function Sidebar({ allDrinks, selected, setSelected }) {
  const [faveDrinks, setFaveDrinks] = useState([]);
  function handleFaveDrinks(addedDrink) {
    faveDrinks.includes(addedDrink) === true
      ? setFaveDrinks((currDrinks) =>
          currDrinks.filter((cur) => cur.name !== addedDrink.name)
        )
      : setFaveDrinks((currDrinks) => [...currDrinks, addedDrink]);
    console.log(faveDrinks);
  }

  const [sort, setSort] = useState("all-drinks");
  function handleSort(e) {
    setSort(e.target.value);
  }

  return (
    <div className="sidebar">
      <div>
        <Favorites sort={sort} handleSort={handleSort} />
        <ListOfDrinks
          allDrinks={allDrinks}
          handleFaveDrinks={handleFaveDrinks}
          sort={sort}
          faveDrinks={faveDrinks}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}

function Favorites({ sort, handleSort }) {
  return (
    <div className="favorites">
      <select value={sort} onChange={(e) => handleSort(e)}>
        <option value="all-drinks">All Drinks</option>
        <option value="favorites">Favorites</option>
      </select>
    </div>
  );
}

function ListOfDrinks({
  allDrinks,
  handleFaveDrinks,
  sort,
  faveDrinks,
  selected,
  setSelected,
}) {
  return (
    <div>
      {sort === "all-drinks" &&
        allDrinks.map((drink) => {
          return (
            <Drink
              drink={drink}
              key={drink.name}
              handleFaveDrinks={handleFaveDrinks}
              faveDrinks={faveDrinks}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}

      {sort === "favorites" &&
        faveDrinks.map((drink) => {
          return (
            <Drink
              drink={drink}
              key={drink.name}
              handleFaveDrinks={handleFaveDrinks}
              faveDrinks={faveDrinks}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
    </div>
  );
}

function Drink({ drink, handleFaveDrinks, faveDrinks, selected, setSelected }) {
  return (
    <div className="drink">
      <FaveButton
        drink={drink}
        handleFaveDrinks={handleFaveDrinks}
        faveDrinks={faveDrinks}
      />
      <p onClick={() => setSelected(drink.name)}>{drink.name}</p>
    </div>
  );
}

function FaveButton({ drink, handleFaveDrinks, faveDrinks }) {
  const [fave, setFave] = useState(false);
  function handleFave() {
    setFave((cur) => !cur);
    handleFaveDrinks(drink);
    console.log(fave);
  }
  return (
    <button
      onClick={handleFave}
      className={faveDrinks.includes(drink) && "fave"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#ff27fb"
        class="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
      </svg>
    </button>
  );
}

function Main({ selected, allDrinks }) {
  const currShown = allDrinks.filter((drink) => drink.name === selected);
  const data = currShown[0];
  console.log(data.ingredients);

  return (
    <div className="main">
      <div>
        <p className="name">{data.name}</p>
        <p className="description">{data.description}</p>
        <p>Ingredients:</p>
        <ul>
          {data.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
      <div>
        <img src={data.img} alt={data.name} />
      </div>
    </div>
  );
}
