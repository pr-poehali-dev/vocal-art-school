
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Teachers = () => {
  // Информация о преподавателях
  const teachers = [
    {
      id: "maria",
      name: "Мария Соловьева",
      position: "Эстрадный вокал",
      image: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=600&h=600&fit=crop&q=80",
      experience: "10+ лет опыта",
      specialization: ["Эстрадный вокал", "Поп", "R&B"],
      shortBio: "Профессиональная певица и педагог с высшим музыкальным образованием. Специализируется на современной эстрадной музыке."
    },
    {
      id: "alexander",
      name: "Александр Петров",
      position: "Джазовый вокал",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=600&h=600&fit=crop&q=80",
      experience: "15+ лет опыта",
      specialization: ["Джазовый вокал", "Скэт", "Импровизация"],
      shortBio: "Джазовый вокалист с многолетним опытом выступлений на международных фестивалях. Мастер импровизации и джазовой стилистики."
    },
    {
      id: "ekaterina",
      name: "Екатерина Иванова",
      position: "Академический вокал",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&h=600&fit=crop&q=80",
      experience: "12+ лет опыта",
      specialization: ["Академический вокал", "Оперное пение", "Классика"],
      shortBio: "Оперная певица, лауреат международных конкурсов. Выпускница консерватории, специалист по классической вокальной технике."
    },
    {
      id: "dmitry",
      name: "Дмитрий Волков",
      position: "Эстрадно-джазовый вокал",
      image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&h=600&fit=crop&q=80",
      experience: "8+ лет опыта",
      specialization: ["Эстрадный вокал", "Джаз", "Рок"],
      shortBio: "Универсальный вокалист и композитор, работающий в различных стилях от рока до джаза. Автор методики быстрого освоения вокальных приемов."
    },
    {
      id: "olga",
      name: "Ольга Смирнова",
      position: "Детский вокал",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop&q=80",
      experience: "9+ лет опыта",
      specialization: ["Детский вокал", "Музыкальное развитие", "Подготовка к конкурсам"],
      shortBio: "Специалист по работе с детьми, психолог по образованию. Разработала уникальную методику обучения вокалу для детей от 5 лет."
    },
    {
      id: "sergey",
      name: "Сергей Николаев",
      position: "Рок-вокал",
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&h=600&fit=crop&q=80",
      experience: "11+ лет опыта",
      specialization: ["Рок-вокал", "Экстрим-вокал", "Сценическое движение"],
      shortBio: "Фронтмен рок-группы с многолетним стажем. Специалист по технике расщепления, гроулу и другим приемам экстремального вокала."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-12 lg:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-playfair text-4xl font-bold tracking-tight sm:text-5xl">
            Наши <span className="text-primary">преподаватели</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Опытные педагоги и практикующие вокалисты, которые помогут раскрыть ваш потенциал 
            и достичь поставленных целей в мире вокального искусства
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{teacher.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Icon name="Mic2" className="h-4 w-4 text-primary" />
                  {teacher.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="outline">{teacher.experience}</Badge>
                  {teacher.specialization.map((spec, index) => (
                    <Badge key={index} variant="secondary">{spec}</Badge>
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{teacher.shortBio}</p>
                <Button asChild className="w-full">
                  <Link to={`/teachers/${teacher.id}`}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
              Наш подход к обучению
            </h2>
            <p className="mt-4 text-muted-foreground">
              Преподаватели VocalArt руководствуются следующими принципами:
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon name="Users" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Индивидуальный подход</h3>
              <p className="text-muted-foreground">
                Разработка персональной программы обучения с учетом целей и особенностей каждого ученика.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon name="Lightbulb" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Практический результат</h3>
              <p className="text-muted-foreground">
                Направленность на достижение конкретных результатов и развитие навыков, применимых в реальной творческой деятельности.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon name="Heart" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Поддержка и вдохновение</h3>
              <p className="text-muted-foreground">
                Создание доверительной и творческой атмосферы, мотивирующей учеников к постоянному развитию.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="container py-12 md:py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
              Квалификация наших педагогов
            </h2>
            <p className="mt-4 text-muted-foreground">
              Все преподаватели VocalArt имеют профессиональное музыкальное образование, 
              многолетний опыт работы и постоянно совершенствуют свои навыки.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="mt-1 h-5 w-5 text-primary" />
                <span>Высшее музыкальное образование в ведущих консерваториях и музыкальных вузах</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="mt-1 h-5 w-5 text-primary" />
                <span>Активная концертная деятельность и регулярные выступления</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="mt-1 h-5 w-5 text-primary" />
                <span>Авторские методики обучения, адаптированные под разные возрасты и уровни</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="mt-1 h-5 w-5 text-primary" />
                <span>Регулярное повышение квалификации на мастер-классах и семинарах</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle" className="mt-1 h-5 w-5 text-primary" />
                <span>Многолетний опыт педагогической работы и успешные ученики</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&auto=format&fit=crop&q=80" 
                alt="Преподаватель обучает ученика"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=600&auto=format&fit=crop&q=80" 
                alt="Преподаватель за роялем"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=80" 
                alt="Студия звукозаписи"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1522536421511-14c9073df899?w=600&auto=format&fit=crop&q=80" 
                alt="Вокальное выступление"
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
              Начните обучение с профессионалами
            </h2>
            <p className="mt-4 text-muted-foreground">
              Запишитесь на пробное занятие и подберите преподавателя, 
              который поможет вам раскрыть свой вокальный потенциал
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/prices">Записаться на пробный урок</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teachers;
