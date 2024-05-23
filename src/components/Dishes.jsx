import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Tasty Dish" price="$10.99"></DishesCard>
        <DishesCard img={img2} title="Tasty Dish" price="$13.99"></DishesCard>
        <DishesCard img={img3} title="Tasty Dish" price="$11.99"></DishesCard>
        <DishesCard img={img4} title="Tasty Dish" price="$14.99"></DishesCard>
        <DishesCard img={img5} title="Tasty Dish" price="$16.99"></DishesCard>
        <DishesCard img={img6} title="Tasty Dish" price="$13.99"></DishesCard>
      </div>
    </div>
  );
};

export default Dishes;
