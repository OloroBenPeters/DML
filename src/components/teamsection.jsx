import hero1 from './../assets/hero1.png';
import TeamCard from './teamcard';
import { useRef, useEffect } from 'react';

export default function TeamSection() {

    const teamMembers = [
        {
            id: 1,
            name: 'Alice Johnson',
            description: 'Lead Developer',
            image: hero1,
        },
        {
            id: 2,
            name: 'Bob Smith',
            description: 'UI/UX Designer',
            image: hero1,
        },
        {
            id: 3,
            name: 'Charlie Brown',
            description: 'Project Manager',
            image: hero1,
        },
        {
            id: 4,
            name: 'Diana Prince',
            description: 'Marketing Specialist',
            image: hero1,
        },
        {
            id: 5,
            name: 'Ethan Hunt',
            description: 'Backend Developer',
            image: hero1,
        },
        {
            id: 6,
            name: 'Fiona Green',
            description: 'Data Analyst',
            image: hero1,
        },
    ];

    return (
        <section id='team' className="py-16 px-6 md:px-16 bg-gray-900 text-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Meet Our Team</h2>
                <p className="text-gray-400 mt-2">The people behind our success</p>
            </div>

            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 xl:px-20 justify-items-stretch">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            image={member.image}
                            name={member.name}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

}