
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: "Mic2",
      title: "Академический вокал",
      description: "Классическая школа для формирования правильной техники пения"
    },
    {
      icon: "Music",
      title: "Эстрадный вокал",
      description: "Современные техники для исполнения популярной музыки"
    },
    {
      icon: "PieChart",
      title: "Джазовый вокал",
      description: "Импровизация, скэт и стилевые особенности джаза"
    },
    {
      icon: "Airplay",
      title: "Онлайн и офлайн",
      description: "Гибкий формат обучения для вашего удобства"
    },
    {
      icon: "Users",
      title: "Для всех возрастов",
      description: "Программы для детей и взрослых любого уровня подготовки"
    },
    {
      icon: "ThumbsUp",
      title: "Концертная практика",
      description: "Регулярные выступления и участие в конкурсах"
    }
  ];

  const teachers = [
    {
      name: "Мария Соловьева",
      position: "Эстрадный вокал",
      image: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=300&h=300&fit=crop&q=80",
      path: "/teachers/maria"
    },
    {
      name: "Александр Петров",
      position: "Джазовый вокал",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=300&h=300&fit=crop&q=80",
      path: "/teachers/alexander"
    },
    {
      name: "Екатерина Иванова",
      position: "Академический вокал",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=300&h=300&fit=crop&q=80",
      path: "/teachers/ekaterina"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background pt-16 lg:pt-0">
        <div className="container grid items-center gap-6 pb-8 pt-10 md:grid-cols-2 md:py-12 lg:py-24">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Найдите свой <span className="text-primary">голос</span> с VocalArt
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Школа вокала для всех возрастов и уровней. Раскройте свой потенциал под руководством опытных преподавателей.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link to="/prices">
                  Записаться на пробный урок
                  <Icon name="ArrowRight" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Узнать больше о школе</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square max-w-sm rounded-full border-4 border-primary/20 shadow-xl md:max-w-md lg:max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=600&fit=crop&q=80"
              alt="Ученица школы вокала"
              className="animate-scale-in rounded-full object-cover"
              width={600}
              height={600}
            />
            <div className="absolute -left-6 -top-6 rounded-full bg-primary p-4 shadow-lg">
              <Icon name="Music2" className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-full bg-accent p-4 shadow-lg">
              <Icon name="Mic2" className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
            Наши направления
          </h2>
          <p className="mt-4 text-muted-foreground">
            Мы предлагаем разнообразные программы обучения, чтобы каждый мог найти подходящий формат
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="animate-fade-in transition-all hover:shadow-lg">
              <CardContent className="flex flex-col items-start gap-2 p-6">
                <div className="rounded-md bg-primary/10 p-2">
                  <Icon name={feature.icon} className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-muted/30 py-12 md:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
              Наши преподаватели
            </h2>
            <p className="mt-4 text-muted-foreground">
              Профессионалы с многолетним опытом выступлений и преподавания
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <div key={teacher.name} className="animate-fade-in group relative overflow-hidden rounded-lg">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-semibold text-white">{teacher.name}</h3>
                  <p className="mb-4 text-white/80">{teacher.position}</p>
                  <Button asChild variant="secondary" size="sm">
                    <Link to={teacher.path}>Подробнее</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/teachers">Все преподаватели</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-12 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
            Отзывы учеников
          </h2>
          <p className="mt-4 text-muted-foreground">
            Более 500 учеников уже нашли свой голос с нами
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-accent/50">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4">
                "Благодаря занятиям в VocalArt я смогла преодолеть страх сцены и раскрыть свой голос. Преподаватели находят подход к каждому ученику!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80"
                  alt="Анна К."
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Анна К.</p>
                  <p className="text-sm text-muted-foreground">Ученица школы</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/30">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4">
                "Моему сыну 8 лет, и он с удовольствием ходит на занятия. За полгода достиг заметных результатов и даже выступил на школьном концерте!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
                  alt="Дмитрий П."
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Дмитрий П.</p>
                  <p className="text-sm text-muted-foreground">Родитель ученика</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/20">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4">
                "В 40 лет решила осуществить мечту детства и научиться петь. Уже через 3 месяца я записала свою первую песню в студии школы!"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80"
                  alt="Елена В."
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">Елена В.</p>
                  <p className="text-sm text-muted-foreground">Ученица школы</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight md:text-4xl">
              Начните раскрывать свой голос сегодня
            </h2>
            <p className="mt-4 text-muted-foreground">
              Запишитесь на бесплатный пробный урок и сделайте первый шаг к вокальному мастерству
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/prices">Записаться на пробный урок</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
