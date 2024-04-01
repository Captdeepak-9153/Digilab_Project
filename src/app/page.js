import HeroButton from "../components/ui/HeroButton";
import HeroImage from "../components/ui/HeroImage";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black  flex justify-center">
      <div className="py-10 px-4  bg-black   text-white flex flex-col w-[350px] justify-between ">
        <div className=" flex flex-col text-center">
          <span className="font-bold text-xl">Lorem Ipsum...</span>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <HeroImage />
        <HeroButton />
      </div>
    </div>
  );
}
