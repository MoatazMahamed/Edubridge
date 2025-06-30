import SectionHeader from "./sectionHeader";

const ratingData = [
  {
    id: 1,
    stars: "⭐⭐⭐⭐⭐",
    img: "../assets/person1.png",
    description:
      "This course exceeded my expectations! The content was well-organised, the explanations were clear, and the hands-on projects helped me build real-worked skills. Highly recommend it to any one looking to learn!",
    namee: "Gamal Mahmoud",
    job: "Software Engineer",
  },
  {
    id: 2,
    stars: "⭐⭐⭐⭐⭐",
    img: "../assets/person2.png",
    description:
      "This course exceeded my expectations! The content was well-organised, the explanations were clear, and the hands-on projects helped me build real-worked skills. Highly recommend it to any one looking to learn!",
    namee: "Omar Mohamed",
    job: "Developer",
  },
  {
    id: 3,
    stars: "⭐⭐⭐⭐⭐",
    img: "../assets/person3.jpg",
    description:
      "This course exceeded my expectations! The content was well-organised, the explanations were clear, and the hands-on projects helped me build real-worked skills. Highly recommend it to any one looking to learn!",
    namee: "Islam Tarek",
    job: "Designer",
  },
];

function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title="Each and every client is important"
          description="Discover what our students are saying in the Reviews section!Real feedback from learners who have experienced and benefited from our courses."
        />

        <div className="ratings">
          {ratingData.map(({ id, stars, img, description, namee, job }) => (
            <div key={id} className="rating">
              <span className="stars">{stars}</span>

              <p className="description">{description}</p>

              <div className="person">
                <img src={img} alt="" />
                <div>
                  <h3 className="text-primary">{namee}</h3>
                  <p>{job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
