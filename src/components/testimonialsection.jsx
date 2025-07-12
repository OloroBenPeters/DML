import TestimonialSectionCard from "./testimonialsectioncard"
import mobiledev from './../assets/mobiledev.jpg'
import webdev from './../assets/webdev.jpg'
import datascience from './../assets/datascience.jpg'


export default function TestimonialSection() {

  const categories = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Build responsive and dynamic websites.',
      image: webdev,
    },
    {
      id: 2,
      name: 'Mobile Development',
      description: 'Create mobile applications for iOS and Android.',
      image: mobiledev,
    },
    {
      id: 3,
      name: 'Data Science',
      description: 'Analyze data to gain insights and make decisions.',
      image: datascience
    },
  ]

  return (
    <section className="py-16 px-8 md:px-16 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Tesitmonials</h2>
        <p className="text-gray-400 mt-2">
          Hear what our clients have to say about us.
        </p>
      </div>

      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(category => (
          <TestimonialSectionCard
            key={category.id}
            image={category.image}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </section>
  )


}