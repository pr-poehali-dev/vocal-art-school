
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  // Информация об истории школы
  const historyTimeline = [
    {
      year: "2015",
      title: "Основание школы",
      description: "VocalArt была основана профессиональной певицей Еленой Васильевой после 15 лет выступлений на ведущих концертных площадках страны."
    },
    {
      year: "2018",
      title: "Расширение направлений",
      description: "Открытие нового направления джазового вокала и современной музыки. Привлечение новых талантливых педагогов."
    },
    {
      year: "2020",
      title: "Онлайн-формат",
      description: "Запуск онлайн-обучения, позволяющего заниматься из любой точки мира с сохранением качества индивидуального подхода."
    },
    {
      year: "2023",
      title: "Новая студия",
      description: "Открытие просторной студии с профессиональным оборудованием для записи и репетиций учеников школы."
    },
  ];

  // Информация о преимуществах школы
  const advantages = [
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Разработка персональной программы обучения для каждого ученика с учетом его целей, возможностей и музыкальных предпочтений."
    },
    {
      icon: "Mic2",
      title: "Профессиональное оборудование",
      description: "Занятия проходят в специально оборудованных классах с использованием профессиональной техники для вокала."
    },
    {
      icon: "Trophy",
      title: "Опытные преподаватели",
      description: "Наши педагоги — практикующие музыканты с высшим музыкальным образованием и многолетним опытом работы."
    },
    {
      icon: "Music",
      title: "Разнообразие стилей",
      description: "Обучаем вокалу в различных жанрах: от академического до современного эстрадного и джазового."
    },
    {
      icon: "Mic",
      title: "Концертная практика",
      description: "Регулярные отчетные концерты, участие в конкурсах и фестивалях для получения сценического опыта."
    },
    {
      icon: "HeadphonesIcon",
      title: "Студия звукозаписи",
      description: "Возможность профессиональной записи вокала и создания демо-треков в нашей студии."
    },
  ];

  // Информация о миссии и ценностях
  const missionValues = [
    {
      title: "Доступность музыкального образования",
      description: "Мы верим, что каждый человек имеет право развивать свой творческий потенциал, независимо от возраста и начального уровня подготовки."
    },
    {
      title: "Профессиональный рост",
      description: "Мы стремимся создать условия для постоянного совершенствования вокальных навыков наших учеников, от первых шагов до профессионального уровня."
    },
    {
      title: "Поддержка и вдохновение",
      description: "Мы формируем дружественную и творческую атмосферу, где каждый ученик чувствует поддержку и находит вдохновение для музыкального развития."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-12 lg:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-playfair text-4xl font-bold tracking-tight sm:text-5xl">
            О школе <span className="text-primary">VocalArt</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Мы создаем пространство, где каждый может найти и раскрыть свой голос, 
            получить качественное музыкальное образование и вдохновение для творческого роста.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
            Наша история
          </h2>
          <p className="mt-4 text-muted-foreground">
            За годы работы мы прошли путь от небольшой студии до полноценной школы вокала с несколькими филиалами
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {historyTimeline.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 md:w-48">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-lg font-bold">{item.year}</span>
                </div>
                {index < historyTimeline.length - 1 && (
                  <div className="ml-6 mt-2 h-full w-0.5 bg-muted md:h-24"></div>
                )}
              </div>
              <div className="-mt-8 md:-mt-0 md:ml-8">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-muted-foreground">
              Преимущества школы вокала VocalArt, которые делают обучение эффективным и увлекательным
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <Card key={index} className="animate-fade-in transition-all hover:shadow-md">
                <CardContent className="flex flex-col items-start p-6">
                  <div className="mb-4 rounded-md bg-primary/10 p-2">
                    <Icon name={advantage.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
            Наша миссия и ценности
          </h2>
          <p className="mt-4 text-muted-foreground">
            Принципы, которыми мы руководствуемся в нашей работе
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {missionValues.map((value, index) => (
            <div key={index} className="rounded-lg border border-accent p-6 transition-all hover:border-primary hover:shadow-md">
              <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Section */}
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
                Современное пространство для творчества
              </h2>
              <p className="text-muted-foreground">
                Наша школа располагает просторными классами с профессиональным оборудованием для занятий и собственной студией звукозаписи.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" /> Акустически обработанные кабинеты
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" /> Профессиональное звуковое оборудование
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" /> Студия звукозаписи с изолированной вокальной кабиной
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary" /> Комфортная зона отдыха для учеников
                </li>
              </ul>
              <div className="pt-2">
                <Button asChild>
                  <Link to="/prices">Записаться на занятие</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop&q=80"
                    alt="Класс для занятий"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&auto=format&fit=crop&q=80"
                    alt="Микрофон в студии"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&auto=format&fit=crop&q=80"
                    alt="Пианино в классе"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
            Команда профессионалов
          </h2>
          <p className="mt-4 text-muted-foreground">
            Наши преподаватели — опытные вокалисты и педагоги, которые помогут вам раскрыть ваш потенциал
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/teachers">Познакомиться с преподавателями</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
              Готовы начать свой путь в мире вокала?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Запишитесь на бесплатный пробный урок и откройте для себя возможности вашего голоса
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/prices">Записаться на пробный урок</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/prices">Узнать стоимость обучения</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
