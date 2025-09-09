
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards, Visibility } from "@/constants";

interface PageProps {
  params: { id: string }
}

const Page = ({ params }: PageProps) => {
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