import { SKILLS } from '@/constants/skill.constant';
import Image from 'next/image';
import { MotionDiv } from '../motion/wrapper-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          skill
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <MotionDiv
              key={index}
              className="border border-border rounded-xl shadow-md p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="flex flex-col items-center">
                <div
                  className=" text-4xl mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-accent-foreground"
                  style={{
                    boxShadow: `0 0 15px ${skill.color}50`,
                  }}
                >
                  <Image
                    width={40}
                    height={40}
                    src={skill.icon}
                    alt={skill.name}
                    className=" object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                  <MotionDiv
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></MotionDiv>
                </div>

                {skill.category}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
