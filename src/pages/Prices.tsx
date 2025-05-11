
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Prices = () => {
  // Данные о тарифах для индивидуальных занятий
  const individualPlans = [
    {
      name: "Пробное занятие",
      price: "800 ₽",
      duration: "45 минут",
      description: "Пробное индивидуальное занятие для новых учеников",
      features: [
        "Знакомство с преподавателем",
        "Оценка вокальных данных",
        "Пробные упражнения",
        "Рекомендации по обучению"
      ],
      popular: false,
      type: "individual"
    },
    {
      name: "Стандарт",
      price: "4 900 ₽",
      priceDescription: "4 занятия",
      duration: "45 минут",
      description: "Идеально для тех, кто хочет попробовать обучение",
      features: [
        "Индивидуальная программа",
        "Подбор репертуара",
        "Техника вокала",
        "Работа над дыханием"
      ],
      popular: false,
      type: "individual"
    },
    {
      name: "Оптимальный",
      price: "8 900 ₽",
      priceDescription: "8 занятий",
      duration: "45 минут",
      description: "Самый популярный выбор для регулярных занятий",
      features: [
        "Все преимущества «Стандарта»",
        "Экономия 11% от стоимости",
        "Работа над произведениями",
        "Дополнительные материалы"
      ],
      popular: true,
      type: "individual"
    },
    {
      name: "Интенсив",
      price: "12 800 ₽",
      priceDescription: "12 занятий",
      duration: "45 минут",
      description: "Для достижения быстрых результатов",
      features: [
        "Все преимущества «Оптимального»",
        "Экономия 15% от стоимости",
        "Запись в студии (1 час)",
        "Участие в отчетном концерте"
      ],
      popular: false,
      type: "individual"
    }
  ];

  // Данные о тарифах для групповых занятий
  const groupPlans = [
    {
      name: "Пробное групповое",
      price: "600 ₽",
      duration: "60 минут",
      description: "Познакомьтесь с форматом групповых занятий",
      features: [
        "Занятие в мини-группе до 5 человек",
        "Базовые распевки и упражнения",
        "Знакомство с другими учениками",
        "Представление формата обучения"
      ],
      popular: false,
      type: "group"
    },
    {
      name: "Группа Старт",
      price: "3 900 ₽",
      priceDescription: "4 занятия",
      duration: "60 минут",
      description: "Для начинающих вокалистов в группе 4-6 человек",
      features: [
        "Базовая вокальная техника",
        "Работа в ансамбле",
        "Еженедельные занятия",
        "Общий репертуар"
      ],
      popular: false,
      type: "group"
    },
    {
      name: "Группа Актив",
      price: "6 900 ₽",
      priceDescription: "8 занятий",
      duration: "60 минут",
      description: "Регулярные занятия для любителей группового пения",
      features: [
        "Все преимущества «Старта»",
        "Экономия 12% от стоимости",
        "Сольные партии в ансамбле",
        "Подготовка к выступлениям"
      ],
      popular: true,
      type: "group"
    },
    {
      name: "Вокальный ансамбль",
      price: "7 900 ₽",
      priceDescription: "8 занятий",
      duration: "90 минут",
      description: "Для тех, кто хочет развиваться в ансамблевом пении",
      features: [
        "Продвинутая работа в ансамбле",
        "Многоголосие и гармония",
        "Концертный репертуар",
        "Регулярные выступления"
      ],
      popular: false,
      type: "group"
    }
  ];

  // Данные о тарифах для детей
  const childrenPlans = [
    {
      name: "Пробное детское",
      price: "700 ₽",
      duration: "30 минут",
      description: "Первое знакомство с вокалом для детей 5-12 лет",
      features: [
        "Знакомство с педагогом",
        "Игровые вокальные упражнения",
        "Оценка природных данных",
        "Рекомендации родителям"
      ],
      popular: false,
      type: "children"
    },
    {
      name: "Детский Старт",
      price: "4 200 ₽",
      priceDescription: "4 занятия",
      duration: "30 минут",
      description: "Для детей 5-8 лет в игровой форме",
      features: [
        "Развитие слуха и голоса",
        "Игровая методика обучения",
        "Детский репертуар",
        "Музыкальная грамота"
      ],
      popular: false,
      type: "children"
    },
    {
      name: "Детский Оптимальный",
      price: "7 900 ₽",
      priceDescription: "8 занятий",
      duration: "40 минут",
      description: "Для детей 9-12 лет с регулярными занятиями",
      features: [
        "Развитие вокальной техники",
        "Работа над детским репертуаром",
        "Подготовка к выступлениям",
        "Участие в детских концертах"
      ],
      popular: true,
      type: "children"
    },
    {
      name: "Творческая студия",
      price: "6 900 ₽",
      priceDescription: "8 занятий",
      duration: "60 минут",
      description: "Комплексные занятия для детей 8-12 лет",
      features: [
        "Вокал и сценическое движение",
        "Актерское мастерство",
        "Работа с микрофоном",
        "Подготовка к конкурсам"
      ],
      popular: false,
      type: "children"
    }
  ];

  // Дополнительные услуги
  const additionalServices = [
    {
      name: "Запись в студии",
      price: "2 500 ₽",
      duration: "60 минут",
      description: "Запись вокала в профессиональной студии школы"
    },
    {
      name: "Подбор репертуара",
      price: "1 500 ₽",
      duration: "Однократно",
      description: "Индивидуальный подбор репертуара под ваш голос и стиль"
    },
    {
      name: "Подготовка к конкурсу",
      price: "6 000 ₽",
      duration: "4 занятия по 60 минут",
      description: "Интенсивная подготовка к вокальным конкурсам и кастингам"
    },
    {
      name: "Онлайн консультация",
      price: "1 200 ₽",
      duration: "45 минут",
      description: "Консультация с преподавателем по видеосвязи"
    }
  ];

  // Функция для отображения карточки тарифа
  const renderPlanCard = (plan) => (
    <Card key={plan.name} className={`flex h-full flex-col ${plan.popular ? "border-primary shadow-md" : ""}`}>
      {plan.popular && (
        <div className="absolute right-4 top-4">
          <Badge>Популярный выбор</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6 flex items-baseline">
          <span className="text-3xl font-bold">{plan.price}</span>
          {plan.priceDescription && (
            <span className="ml-2 text-sm text-muted-foreground">/ {plan.priceDescription}</span>
          )}
        </div>
        <div className="mb-4 flex items-center text-sm text-muted-foreground">
          <Icon name="Clock" className="mr-2 h-4 w-4" />
          {plan.duration} / занятие
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon name="Check" className="mr-2 mt-1 h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Выбрать тариф</Button>
      </CardFooter>
    </Card>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-12 lg:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-playfair text-4xl font-bold tracking-tight sm:text-5xl">
            Стоимость <span className="text-primary">обучения</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Выберите подходящий формат занятий и запишитесь на пробный урок уже сегодня
          </p>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className="container py-12">
        <Tabs defaultValue="individual" className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList>
              <TabsTrigger value="individual">Индивидуальные</TabsTrigger>
              <TabsTrigger value="group">Групповые</TabsTrigger>
              <TabsTrigger value="children">Детские</TabsTrigger>
              <TabsTrigger value="additional">Дополнительно</TabsTrigger>
            </TabsList>
          </div>

          {/* Individual Plans */}
          <TabsContent value="individual">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="font-playfair text-3xl font-bold">Индивидуальные занятия</h2>
              <p className="mt-3 text-muted-foreground">
                Персональные занятия с преподавателем для максимально эффективного обучения
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {individualPlans.map(renderPlanCard)}
            </div>

            <div className="mt-10 rounded-lg bg-muted/30 p-6">
              <div className="mx-auto max-w-3xl">
                <h3 className="mb-3 text-xl font-semibold">О индивидуальных занятиях</h3>
                <p className="mb-4 text-muted-foreground">
                  Индивидуальный формат позволяет максимально сфокусироваться на ваших потребностях и целях. 
                  Преподаватель разрабатывает персональную программу, учитывающую ваши природные данные, предпочтения и уровень подготовки.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-start">
                    <Icon name="Users" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Персональное внимание</h4>
                      <p className="text-sm text-muted-foreground">100% внимания преподавателя только вам</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Sparkles" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Быстрый результат</h4>
                      <p className="text-sm text-muted-foreground">Заметный прогресс уже после нескольких занятий</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Music" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Индивидуальный репертуар</h4>
                      <p className="text-sm text-muted-foreground">Подбор произведений под ваш голос и вкус</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Group Plans */}
          <TabsContent value="group">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="font-playfair text-3xl font-bold">Групповые занятия</h2>
              <p className="mt-3 text-muted-foreground">
                Занятия в мини-группах для тех, кто любит заниматься в компании единомышленников
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {groupPlans.map(renderPlanCard)}
            </div>

            <div className="mt-10 rounded-lg bg-muted/30 p-6">
              <div className="mx-auto max-w-3xl">
                <h3 className="mb-3 text-xl font-semibold">О групповых занятиях</h3>
                <p className="mb-4 text-muted-foreground">
                  Групповые занятия — это отличная возможность учиться вместе с другими учениками, 
                  развивать навыки ансамблевого пения и получать удовольствие от совместного творчества. 
                  В группах 4-6 человек преподаватель уделяет внимание каждому ученику.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-start">
                    <Icon name="Users" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Командная работа</h4>
                      <p className="text-sm text-muted-foreground">Развитие навыков ансамблевого пения</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Coins" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Выгодная стоимость</h4>
                      <p className="text-sm text-muted-foreground">Доступнее индивидуальных занятий</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="HeartHandshake" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Дружественная атмосфера</h4>
                      <p className="text-sm text-muted-foreground">Общение с единомышленниками</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Children Plans */}
          <TabsContent value="children">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="font-playfair text-3xl font-bold">Детские программы</h2>
              <p className="mt-3 text-muted-foreground">
                Специальные программы для развития юных талантов от 5 до 12 лет
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {childrenPlans.map(renderPlanCard)}
            </div>

            <div className="mt-10 rounded-lg bg-muted/30 p-6">
              <div className="mx-auto max-w-3xl">
                <h3 className="mb-3 text-xl font-semibold">О детских занятиях</h3>
                <p className="mb-4 text-muted-foreground">
                  Детские программы разработаны с учетом возрастных особенностей и строятся на игровых методиках, 
                  которые делают обучение увлекательным и эффективным. Наши педагоги имеют специальную подготовку 
                  для работы с детьми.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-start">
                    <Icon name="Gamepad2" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Игровая форма</h4>
                      <p className="text-sm text-muted-foreground">Обучение через игру и творчество</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Music2" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Музыкальное развитие</h4>
                      <p className="text-sm text-muted-foreground">Комплексное развитие музыкальных способностей</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Star" className="mr-2 mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Выступления</h4>
                      <p className="text-sm text-muted-foreground">Регулярные детские концерты и мероприятия</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Additional Services */}
          <TabsContent value="additional">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="font-playfair text-3xl font-bold">Дополнительные услуги</h2>
              <p className="mt-3 text-muted-foreground">
                Специальные предложения для наших учеников
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {additionalServices.map((service) => (
                <Card key={service.name}>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-baseline">
                      <span className="text-2xl font-bold">{service.price}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="mr-2 h-4 w-4" />
                      {service.duration}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Добавить к занятиям</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Discounts Section */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold">Специальные предложения</h2>
            <p className="mt-3 text-muted-foreground">
              Скидки и акции для наших учеников
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-primary/5 transition-transform hover:translate-y-[-5px]">
              <CardHeader>
                <div className="mb-2 flex justify-center">
                  <Icon name="Users" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Приведи друга</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Приведите друга на занятия и получите скидку 10% на следующий абонемент
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 transition-transform hover:translate-y-[-5px]">
              <CardHeader>
                <div className="mb-2 flex justify-center">
                  <Icon name="CalendarRange" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Дневные часы</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Скидка 15% на дневные занятия с 12:00 до 15:00 в будние дни
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 transition-transform hover:translate-y-[-5px]">
              <CardHeader>
                <div className="mb-2 flex justify-center">
                  <Icon name="Cake" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">День рождения</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Скидка 20% на любой абонемент в течение недели до и после дня рождения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="font-playfair text-3xl font-bold">Запишитесь на занятие</h2>
            <p className="mt-3 text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Номер телефона
                  </label>
                  <Input id="phone" placeholder="+7 (XXX) XXX-XX-XX" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div>
                <label htmlFor="lesson-type" className="mb-2 block text-sm font-medium">
                  Тип занятия
                </label>
                <select
                  id="lesson-type"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Выберите тип занятия</option>
                  <option value="individual-trial">Индивидуальное пробное</option>
                  <option value="group-trial">Групповое пробное</option>
                  <option value="children-trial">Детское пробное</option>
                  <option value="consultation">Консультация</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Дополнительная информация
                </label>
                <Textarea
                  id="message"
                  placeholder="Укажите предпочтительное время занятий, интересующее направление и другую полезную информацию"
                  rows={4}
                />
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-muted-foreground">
                  Я согласен с{" "}
                  <a href="#" className="text-primary hover:underline">
                    условиями обработки персональных данных
                  </a>
                </label>
              </div>
              <Button type="submit" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold">Частые вопросы</h2>
            <p className="mt-3 text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-3">
                <TabsTrigger value="general">Общие</TabsTrigger>
                <TabsTrigger value="lessons">О занятиях</TabsTrigger>
                <TabsTrigger value="payment">Оплата</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <div className="space-y-4">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Нужна ли музыкальная подготовка для начала занятий?</h3>
                    <p className="text-muted-foreground">
                      Нет, музыкальная подготовка не требуется. Мы работаем с учениками любого уровня, включая тех, кто никогда раньше не занимался музыкой или вокалом.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">С какого возраста можно начинать заниматься?</h3>
                    <p className="text-muted-foreground">
                      Мы принимаем учеников с 5 лет. Для детей младшего возраста (5-8 лет) у нас разработаны специальные программы с игровыми элементами.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Можно ли заниматься, если нет музыкального слуха?</h3>
                    <p className="text-muted-foreground">
                      Да, можно. Музыкальный слух — это навык, который можно и нужно развивать. У всех есть потенциал, и наши методики помогают развить слух даже тем, кто считает, что у них его нет.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Как часто нужно заниматься для достижения результатов?</h3>
                    <p className="text-muted-foreground">
                      Для заметного прогресса рекомендуется заниматься 1-2 раза в неделю. Также важна регулярная самостоятельная практика между занятиями.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="lessons">
                <div className="space-y-4">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Как проходят индивидуальные занятия?</h3>
                    <p className="text-muted-foreground">
                      Индивидуальное занятие длится 45 минут и включает распевку, дыхательные упражнения, работу над техникой и разбор произведений. Программа адаптируется под ваши цели и уровень подготовки.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Чем отличаются групповые занятия от индивидуальных?</h3>
                    <p className="text-muted-foreground">
                      На групповых занятиях вы работаете вместе с другими учениками (4-6 человек), развивая не только сольное пение, но и навыки ансамблевого исполнения. Групповые занятия длятся 60 минут.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Нужно ли приносить что-то на занятия?</h3>
                    <p className="text-muted-foreground">
                      Для занятий потребуется тетрадь или блокнот для записей, вода и удобная одежда. Все остальные материалы и оборудование предоставляет школа.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Как выбрать преподавателя?</h3>
                    <p className="text-muted-foreground">
                      На пробном занятии вы можете познакомиться с преподавателем и оценить, комфортно ли вам с ним работать. Также вы можете заранее изучить профили наших педагогов на сайте и выбрать специалиста по интересующему вас направлению.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="payment">
                <div className="space-y-4">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Какие способы оплаты вы принимаете?</h3>
                    <p className="text-muted-foreground">
                      Мы принимаем оплату наличными, банковскими картами, а также переводом на расчетный счет. Также возможна оплата через мобильные приложения банков.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Можно ли вернуть деньги за абонемент?</h3>
                    <p className="text-muted-foreground">
                      Возврат средств за неиспользованные занятия возможен при условии предупреждения об отказе не менее чем за 7 дней. Подробные условия возврата указаны в договоре.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Как долго действует абонемент?</h3>
                    <p className="text-muted-foreground">
                      Абонемент на 4 занятия действует 1 месяц, на 8 занятий — 2 месяца, на 12 занятий — 3 месяца с момента приобретения.
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="mb-2 font-semibold">Есть ли система скидок для постоянных учеников?</h3>
                    <p className="text-muted-foreground">
                      Да, для постоянных учеников у нас действует накопительная система скидок. После трех месяцев регулярных занятий вы получаете статус постоянного ученика и скидку 5% на все абонементы.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-3xl rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="font-playfair text-2xl font-bold">
            Готовы начать свой путь в мире вокала?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Запишитесь на пробное занятие и откройте для себя радость пения вместе с VocalArt
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              <Icon name="CalendarPlus" className="h-4 w-4" />
              Записаться на пробный урок
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/teachers">Познакомиться с преподавателями</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;
