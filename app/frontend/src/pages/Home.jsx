function Home() {
  const data = JSON.parse(localStorage.getItem('userInfos'));
  console.log(data);
  return (
    <h1>
      {data.id}-{data.name}
    </h1>
  );
}

export default Home;
