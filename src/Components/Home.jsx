import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    img: <CiMap />,
    title: "Books Library",
    description:
      "The Gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#E74040",
    bgColor: "#FFDCD1",
  },
  {
    id: 2,
    img: <FaImages />,
    title: "Market Analysis",
    description:
      "The Gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#2DC071",
    bgColor: "#B9EAA8",
  },
  {
    id: 3,
    img: <FaCreditCard />,
    title: "50+ online courses",
    description:
      "The Gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#23A6F0",
    bgColor: "#B2E3FF",
  },
];

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We know how large objects will act, but things on a small scale just
            do not act that way
          </p>
          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>

        <div className="card-container">
          {cardData.map(({ id, img, title, description, color, bgColor }) => (
            <div className="card" key={id}>
              <span
                className="icon"
                style={{ color: color, backgroundColor: bgColor}}
              >
                {img}
              </span>

              <h2>{title}</h2>

              <span className="line"></span>

              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;