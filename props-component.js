function toLowerCase(text)
{
  return text.toLowerCase();
}

function TitleHead(props) {

    // JSX need wrap with one element
  return (
    <div>
      <img src={props.user.urlImage}/>
      <b>Name: {toLowerCase(props.user.name)}</b>
      <b>Username: {props.user.username}</b>
    </div>
  );
}

function App() {
  const dataUser = {
    user: {
      urlImage: "https://fakeimg.pl/300/",
      name: "irfan",
      username: "irfanhkm", 
    },
    tweetContent: "New Monitor who dis",
    time: "8:41 PM - Nov 13, 2021"
  };
  return (
    <div>
      <TitleHead user={dataUser.user} />
      <TitleHead user={dataUser.user} />
    </div>
  );
}

ReactDOM.render(
  <App />,  document.getElementById('root')
);