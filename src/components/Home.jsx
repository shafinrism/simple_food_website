import Button from "../layouts/Button";



const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor text-6xl font-semibold">Elevate Your Inner Foodie With Every Bite.</h1>
        <p className="text-backgroundColor ">True foodies love to watch food being prepared and eaten. It provides inspiration and is almost as satisfying as eating it yourself. You will enjoy cooking shows, food travel shows</p>
        <div className="lg:pl-44">
          <Button title="Order Now"/>
        </div>
      </div>
    </div>
  );
};

export default Home;