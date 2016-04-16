import Ember from 'ember';

const data = Ember.A([
  {
    "name": "Carl Gustav Jung",
    "birth": 1875,
    "death": 1961,
    "summary": "Founder of analytical psychology; created some best known psychological concepts including the archetype, the collective unconscious, the complex, and the extraversion and introversion"
  },
  {
    "name": "Maria Montessori",
    "birth": 1870,
    "death": 1952,
    "summary": "Known for her philosophy of education called the Montessori method, it is still used in some public and private schools throughout the world"
  },
  {
    "name": "Benjamin Bloom",
    "birth": 1913,
    "death": 1999,
    "summary": "Contributions to the classification of educational objectives and theory of mastery-learning"
  },
  {
    "name": "Robert Gagne",
    "birth": 1916,
    "death": 2002,
    "summary": "Known for his 'Conditions of Learning' and computer based learning."
  },
  {
    "name": "John Flavell",
    "birth": 1928,
    "death": Infinity,
    "summary": "Flavell has conducted extensive research into metacognition and the child's theory of mind; most famous contribution is his work in children's development and understanding of the distinction between appearance and reality"
  },
  {
    "name": "Alfred Binet",
    "birth": 1857,
    "death": 1911,
    "summary": "A french psychologist who invented the first practical intelligence test, the Binet-Simon Scale"
  },
  {
    "name": "Neil Flemming",
    "birth": 1939,
    "death": Infinity,
    "summary": "New Zealand educator who is best known world-wide for the design of the VARK (Visual Aural Read/Write Kinesthetic model, which expanded upon earlier neuro-linguistic programming models."
  },
  {
    "name": "Albert Bandura",
    "birth": 1925,
    "death": Infinity,
    "summary": "For almost six decades he has been responsible for contributions to the field of education and to many fields of psychology including, social cognitive theory, therapy, and personality psychology, and was also influential in the transition between behavorism and cognitive psychology. He is known as the originator of social learning theory and the theoretical construct of self-efficacy and is also responsible for the influential 1961 BoBo Doll experiment."
  },
  {
    "name": "Elliot Aronson",
    "birth": 1932,
    "death": Infinity,
    "summary": "An American psychologist that is listed among the 100 Most Eminent Psychologist of the 20th Century, and best known for his research on Cognitive Dissonance, High-Impact Experimentation, Jigsaw Classroom, and Gain-Loss Theory of Attraction."
  },
  {
    "name": "Paulo Freire",
    "birth": 1921,
    "death": 1997,
    "summary": "A brazilian educator and philosopher who was a leading advocate of critical pedagogy. He is best known for his influential work Pedagogy of the Oppressed which is considered one of the foundational texts of the critical pedagogy movement."
  },
  {
    "name": "Lee Schulman",
    "birth": 1938,
    "death": Infinity,
    "summary": "He is an educational psychologist who had made notable contributions to the study of teaching, assessment of teaching, and the fields of medicine, science, and mathematics. Schulman is credited with popularizing the phrase, Pedagogical Content Knowledge."
  },
  {
    "name": "Ann Brown",
    "birth": 1943,
    "death": 1999,
    "summary": "She was an educational psychologist who developed methods for teaching children to be better learners. Her realization that children's learning difficulties often stem from an inability to use metacognitive strategies such as summarizing led to profound advances in educational psychology theory and teaching practices."
  },
  {
    "name": "David Kolb",
    "birth": 1939,
    "death": Infinity,
    "summary": "An American educational theorist whose interest in publications focus on experiential learning, the individual and social change, career development, and executive and professional education. He developed the Experiential Learning Model composed of four elements: concrete experience, observation of and reflection on that experience, formation of abstract concepts based upon the reflection, testing the new concepts, repeat. These four elements are the essence of spiral learning."
  },
  {
    "name": "Linda Darling-Hammond",
    "birth": 1951,
    "death": Infinity,
    "summary": "Her work focuses on school restructuring, teacher education, and educational equity. Educational equity is a measure of achievement, fairness, and opportunity in education. She was also the educational advisor to Barack Obama's presidential campaign."
  },
  {
    "name": "Seymour Papert",
    "birth": 1928,
    "death": Infinity,
    "summary": "An MIT Mathematician Computer Scientist, and educator. He is one of the pioneers of Artificial Intelligence and Co-Inventor of the Logo Programming Language. He worked on learning theories and is known for focusing on the impact of new technologies on learning in general, and in schools as learning organizations in particular. He was the developer of a theory on learning called Constructionism."
  },
  {
    "name": "Samuel A. Kirk",
    "birth": 1904,
    "death": 1996,
    "summary": "First user of term 'learning disability' at a Chicago conference in 1963 on children with perceptual disorders. The term sticks, and in 1964, the Association for Children with Learning Disabilities, now the Learning Disabilities Association of America, is formed. Today, nearly one-half of all students in the U.S. who receive special education have been identified as having learning disabilities. "
  },
  {
    "name": "Jean Jacques Rousseau", "birth": 1712, "death": 1778,
    "summary": "Wrote Emile, the life of a hypothetical child from birth to adolescence; return to nature and a naturalistic approach to education; idea of 'unfolding;' basic innate goodness of children; and children develop through experiences with the environment."
  },
  {
    "name": "Madeline C. Hunter",
    "birth": 1916,
    "death": 1994,
    "summary": "Writer of 'Mastery Teaching' and her teaching model becomes widely used as teachers throughout the country attend her workshops and become 'Hunterized.'"
  },
  {
    "name": "B. F. Skinner",
    "birth": 1904,
    "death": 1990,
    "summary": "Writer of 'Science and Human Behavior' in 1953. His form of behaviorism (operant conditioning), which emphasizes changes in behavior due to reinforcement, becomes widely accepted and influences many aspects of American education"
  },
  {
    "name": "Johann Heinrich Pestalozzi", "birth": 1746, "death": 1827,
    "summary": "Back death to death: nature concepts; started school at Neuhof and developed ideas of integrating of home life, vocational education, and education for reading and writing; and wrote Leonard and Gertrude, How Gertrude Teaches Her Children and Book for Mothers."
  },
  {
    "name": "Ruby Bridges",
    "birth": 1954,
    "death": Infinity,
    "summary": "First African American to attend William Frantz Elementary School in New Orleans in 1960. She became a class of one as parents remove all Caucasian students from the school."
  },
  {
    "name": "Robert Owen",
    "birth": 1771,
    "death": 1858,
    "summary": "Environmentalist; believed that by controlling the circumstances and consequent outcomes of child rearing, a new and more perfect society could be built; and opened an infant school in 1861."
  },
  {
    "name": "Friedrich Wilhelm Froebel",
    "birth": 1782,
    "death": 1852,
    "summary": "Identified as 'Father of Kindergarten', developed a curriculum and methodology gifts and occupations, role of play, rhymes and songs, etc., and wrote Mother's Songs, Games, and Stories. Developed the 'Froebel Gifts', intricate and beautiful manipulative materials."
  },
  {
    "name": "Elizabeth Palmer Peabody",
    "birth": 1804,
    "death": 1894,
    "summary": "Champion of education reform and visionary teacher. Established the first formal American Kindergarten in 1860. Studied and applied the work of Froebel in America. Mrs. Peabody was a proponent of the idea that each child should receive education that emerged from their innate capacity"
  },
  {
    "name": "John Dewey",
    "birth": 1859,
    "death": 1952,
    "summary": "Was the leader of the progressive education movement, emphasizing the child and his interests, the child centered curriculum or child centered school; and wrote several books, including My Pedagogical Creed which set forth his beliefs that education is 'a process of living, not a preparation for future living'."
  },
  {
    "name": "Mary Lyon.",
    "birth": 1797,
    "death": 1849,
    "summary": "Founder of the first college for women in the U.S. It opens in 1837 with 87 students"
  },
  {
    "name": "Jean Piaget",
    "birth": 1896,
    "death": 1980,
    "summary": "Developed a widely accepted theory of intellectual development, identifying four major stages of intellectual thinking. His writings and ideas have made a major impact on early childhood education programs since the 1960s."
  },
  {
    "name": "Lev Vygotsky",
    "birth": 1896,
    "death": 1934,
    "summary": "Constructivist; believed that children's mental, language and social development is supported and enhanced by others through social interaction. Bruner applies the term “scaffolding” to the support that teachers provide their students in the zone of proximal development."
  },
  {
    "name": "Jerome Bruner",
    "birth": 1915,
    "death": Infinity,
    "summary": "Cognitive psychologist and educational theorist noted for his efforts to bring the work of Vygotsky and Piaget to the attention of the West. A cognitive constructivist who championed discovery and guided discovery based learning. Coined the term scaffolding. Author of the groundbreaking 'The Process of Education'"
  },
  {
    "name": "Loris Malaguzzi",
    "birth": 1920,
    "death": 1994,
    "summary": "Visionary Italian educator who worked with post war educators to design a revolutionary new approach to ECE based in the city of Reggio Emilia. Designd schools to be collaborative, project based with deep community involvement. Making learning visible."
  },
  {
    "name": "Howard Gardner",
    "birth": 1943,
    "death": Infinity,
    "summary": "A contemporary theorist who proposes that one unitary intelligence not a good way to describe human intellect. Instead he proposes that there are many different ways in which we demonstrate our intelligence. Encourages the structuring of schooling around authentic learning experiences that include authentic performance based assessments."
  }
]);

export default Ember.Route.extend({
  model() {
    return data.sortBy("birth");
  }
});