import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="md:h-screen md:w-screen bg-black text-white flex flex-col justify-center items-center gap-5">
        <div className="w-full md:w-auto">
          <Image
            src="/Status Bar.png"
            alt="Image Above Text"
            width={500}
            height={100}
          />
        </div>
        <div>
        <div className="font-bold text-xl">Lorem Ipsum...</div>
        <div>Lorem ipsum dolor sit amet.</div>
        </div>
      <div className="h-screen w-screen bg-black text-white flex justify-center items-center relative">
        <div
          className="absolute inset-0 flex justify-center items-center z-10"
          style={{ paddingBottom: "455px" }}
        >
          <Image
            src="/notification.png"
            alt="Notification"
            width={64}
            height={64}
          />
        </div>
        <img
          src="/illustration.png"
          alt="Illustration"
          className="absolute inset-0 object-cover z-0 mx-auto"
          width={344}
          height={344}
        />
        <div>
          <button className="mt-8 bg-gradient-to-r from-red-500 to-black hover:from-red-600 hover:to-black text-white py-2 px-4 rounded-md">
            Send Notification
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
