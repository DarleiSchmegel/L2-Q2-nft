import Banner from '../components/Banner';
import Section from '../components/Section';
import CardSlider from '../components/CardSlider';
import SectionIcons from '../components/SectionIcons';

export default function Home() {
  return (
    <section className="">
      <Banner />
      <CardSlider />
      <Section />
      <SectionIcons />
    </section>
  );
}
