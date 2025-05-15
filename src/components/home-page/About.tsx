import { AboutImg } from "../../assets";
import { LanguageProps } from "../../types";
import { useAppContext } from "../../context";
import SectionTitle from "../cards/SectionTitle";
import { translations } from "../../constants/translation";

const About = () => {
  const { language }: { language: LanguageProps } = useAppContext();

  const transaction = {
    fr: [
      "Asfar Tiba est une agence de voyages leader, spécialisée dans l'organisation des séjours pour la Omra. Fondée avec une vision claire, notre mission est d'offrir une expérience de voyage unique qui répond aux besoins des voyageurs en quête de sérénité, de confort et de fiabilité.",
      "Depuis notre création, notre priorité a toujours été de faire de chaque Omra une expérience spirituelle mémorable. Grâce à une équipe expérimentée et dévouée, nous proposons des services complets allant de la réservation des billets à l'organisation de l'hébergement dans des hôtels proches des lieux saints, en passant par la gestion des transferts pour simplifier chaque étape du voyage.",
      "Chez Asfar Tiba, nous plaçons nos clients au cœur de nos préoccupations. C'est pourquoi nous nous efforçons constamment de proposer des solutions sur mesure et des services de qualité supérieure qui garantissent leur satisfaction totale.",
      "Nous sommes fiers de bâtir des relations solides et durables avec nos clients, qui nous font confiance pour leur offrir une expérience dépassant leurs attentes. En outre, nous restons toujours à l'affût des dernières tendances et innovations dans le domaine du voyage afin d'améliorer nos prestations et de proposer des offres adaptées à tous les budgets.",
      "Notre vision pour l'avenir est de devenir le premier choix de ceux qui recherchent une Omra bien organisée et parfaitement adaptée à leurs attentes. Avec Asfar Tiba, partez en toute sérénité!",
    ],
    ar: [
      "أسفار طيبة هي وكالة سفر رائدة ومتخصصة في تنظيم رحلات العمرة، تأسست برؤية واضحة لتوفير تجربة سفر فريدة تلبي احتياجات المسافرين الباحثين عن رحلات مريحة وموثوقة. نحن نفخر بتقديم خدمات ذات جودة عالية بأسعار تنافسية، مع الالتزام بأعلى معايير المهنية والشفافية",
      "منذ بدايتنا، كان هدفنا الأساسي هو جعل رحلة العمرة تجربة روحانية مميزة تركز على راحة الحجاج واحتياجاتهم. بفضل فريق عملنا المتميز الذي يمتلك خبرة واسعة ومعرفة دقيقة باحتياجات المسافرين، نقدم خدمات متكاملة تشمل حجز التذاكر، تنظيم الإقامة في أماكن قريبة من الحرم، وتوفير المواصلات لتسهيل كل خطوة من الرحلة",
      "نؤمن في أسفار طيبة بأن العميل هو محور اهتمامنا، ولهذا السبب نسعى دائمًا لتقديم أفضل الحلول والخدمات التي تضمن راحة ورضا عملائنا. نحن نفخر بعلاقاتنا الطويلة مع عملائنا الذين يثقون بنا لتقديم تجربة سفر تفوق توقعاتهم",
      "بالإضافة إلى ذلك، نحرص على متابعة كل جديد في عالم السفر لتطوير خدماتنا باستمرار، وضمان تقديم عروض مميزة تناسب جميع الفئات. رؤيتنا للمستقبل تتلخص في أن نكون الخيار الأول لكل من يبحث عن رحلة عمرة مريحة ومثالية",
    ],
  };

  return (
    <section id="about" className="container pt-100">
      <SectionTitle title={translations[language].aboutTitle} />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-start justify-center order-2 md:order-1">
          <div className="flex flex-col gap-5 text-lg font-normal">
            {transaction[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center text-center order-1 md:order-2">
          <img
            src={AboutImg}
            width={350}
            height={300}
            className="rounded-lg"
            alt="about image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
