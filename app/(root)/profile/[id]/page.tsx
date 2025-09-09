import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard"; 
import { dummyCards } from "@/constants";


const Page = ({ params }: ParamsWithSearch) => {
  const { id } = params;
  return (
    <div className="wrapper page">
        <Header subHeader="dev.bushko@gmail.com" title="Oleksandr Bushko" userImg="/assets/images/dummy.jpg" />
        <section className='video-grid'>

        {dummyCards.map((card) => (
          <VideoCard
            key={card.id}
            {...card}
            visibility={card.visibility as Visibility}
          />
        ))}
        </section>
    </div>
  );
};

export default Page;