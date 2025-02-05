import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/pic1.png"
import img2 from "../assets/pic2.png"
import img3 from "../assets/pic3.png"



const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font font-semibold text-center lg:pt-16 pt-24 pb-10">Customer's Review</h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azua"></ReviewCard>
        <ReviewCard img={img2} name="Victor Sam"></ReviewCard>
        <ReviewCard img={img3} name="Andy Flora"></ReviewCard>
      </div>
    </div>
  );
};

export default Reviews;