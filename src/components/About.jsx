import img from "../assets/about.png"
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="" />
      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start ">Why Choose Us?</h1>
        <p>Providing nourishing, exciting and energising food is what we do. Our goal is to restore your natural balance in mind, body and soul regardless of your lifestyle, diet or allergies.</p>
        <p>Why choose us is the important and very essential section of a web site. Your website needs why choose us section for attracting your product to the audience. Here is the why choose us section idea that you can use in your food delivery website</p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;