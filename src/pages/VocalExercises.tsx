
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const VocalExercises = () => {
  // Данные для вокальных упражнений
  const warmupExercises = [
    {
      id: "warmup-1",
      title: "Дыхательная гимнастика",
      description: "Упражнения для развития правильного певческого дыхания",
      level: "Начинающий",
      duration: "5-7 минут",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5463357?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Свечка»",
          description: "Представьте, что перед вами свеча. Сделайте глубокий вдох через нос, а затем медленно выдыхайте через рот, как будто стараетесь не задуть свечу, а лишь отклонить пламя. Повторите 5-7 раз.",
          video: "https://example.com/video1"
        },
        {
          name: "«Короткий вдох – долгий выдох»",
          description: "Сделайте быстрый вдох через нос, а затем очень медленный и контролируемый выдох через рот, считая до 10-15. Со временем увеличивайте счет. Повторите 5 раз.",
          video: "https://example.com/video2"
        },
        {
          name: "«Собачка»",
          description: "Высуньте язык и дышите часто и поверхностно через рот, как собака в жаркий день. Затем сделайте глубокий вдох и медленно выдох. Повторите 3-5 раз.",
          video: "https://example.com/video3"
        }
      ]
    },
    {
      id: "warmup-2",
      title: "Артикуляционная гимнастика",
      description: "Упражнения для разминки речевого аппарата перед пением",
      level: "Начинающий",
      duration: "3-5 минут",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Улыбка-трубочка»",
          description: "Поочередно растягивайте губы в широкой улыбке, а затем собирайте их в трубочку. Повторите 10-15 раз.",
          video: "https://example.com/video4"
        },
        {
          name: "«Лошадка»",
          description: "Щелкайте языком, имитируя цокот копыт. Начните медленно, постепенно ускоряясь. Выполняйте 20-30 секунд.",
          video: "https://example.com/video5"
        },
        {
          name: "«Круговые движения языком»",
          description: "Медленно двигайте языком по внешней стороне губ сначала в одну, затем в другую сторону. Сделайте 5-7 кругов в каждую сторону.",
          video: "https://example.com/video6"
        }
      ]
    }
  ];

  const basicExercises = [
    {
      id: "basic-1",
      title: "Распевки для начинающих",
      description: "Базовые упражнения для развития голоса и диапазона",
      level: "Начинающий",
      duration: "10-15 минут",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Слоги на одной ноте»",
          description: "Пойте слоги 'ма', 'мэ', 'ми', 'мо', 'му' на одной удобной ноте, следя за четкостью артикуляции. Затем перейдите к другой ноте и повторите.",
          video: "https://example.com/video7",
          audio: "https://example.com/audio1"
        },
        {
          name: "«Гамма на 5 нот»",
          description: "Пойте на слог 'ми' гамму из 5 нот вверх и вниз в медленном темпе, следя за чистотой интонации. Постепенно можно расширять диапазон.",
          video: "https://example.com/video8",
          audio: "https://example.com/audio2"
        },
        {
          name: "«Терции»",
          description: "Пойте на слог 'ля' терции (три ноты вверх, три вниз). Это упражнение помогает развить чувство интервалов и чистоту интонации.",
          video: "https://example.com/video9",
          audio: "https://example.com/audio3"
        }
      ]
    },
    {
      id: "basic-2",
      title: "Упражнения на легато",
      description: "Развитие плавного голосоведения и однородности звучания",
      level: "Начинающий-Средний",
      duration: "10-15 минут",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Пение на гласных»",
          description: "Пойте последовательность гласных 'а-э-и-о-у' на одной ноте, плавно переходя от одной гласной к другой. Затем повторите на другой ноте.",
          video: "https://example.com/video10",
          audio: "https://example.com/audio4"
        },
        {
          name: "«Восходящее и нисходящее легато»",
          description: "Пойте на слог 'ми' плавную последовательность из 5 нот вверх и вниз, не прерывая звук между нотами. Представьте, что ваш голос - это непрерывная нить.",
          video: "https://example.com/video11",
          audio: "https://example.com/audio5"
        },
        {
          name: "«Легато на октаву»",
          description: "Пойте последовательность из 8 нот (октаву) на слог 'ля', стараясь сохранять равномерность и плавность звучания на всем диапазоне.",
          video: "https://example.com/video12",
          audio: "https://example.com/audio6"
        }
      ]
    }
  ];

  const intermediateExercises = [
    {
      id: "intermediate-1",
      title: "Упражнения на расширение диапазона",
      description: "Освоение верхнего и нижнего регистров голоса",
      level: "Средний",
      duration: "15-20 минут",
      image: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Сирена»",
          description: "На звук 'У' плавно скользите от нижней ноты вашего диапазона к верхней и обратно, как сирена. Следите за свободой звучания и отсутствием напряжения.",
          video: "https://example.com/video13",
          audio: "https://example.com/audio7"
        },
        {
          name: "«Арпеджио»",
          description: "Пойте арпеджио (разложенный аккорд) на слоги 'ми-мэ-ма-мо-му' вверх и вниз. Начинайте с удобного диапазона, постепенно расширяя его.",
          video: "https://example.com/video14",
          audio: "https://example.com/audio8"
        },
        {
          name: "«Квинты»",
          description: "Пойте последовательность из 5 нот вверх и вниз на слог 'зи', акцентируя верхнюю ноту. Это помогает укрепить переход между грудным и головным резонаторами.",
          video: "https://example.com/video15",
          audio: "https://example.com/audio9"
        }
      ]
    },
    {
      id: "intermediate-2",
      title: "Работа над переходными нотами",
      description: "Сглаживание регистровых переходов голоса",
      level: "Средний",
      duration: "15-20 минут",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Глиссандо на гласных»",
          description: "Пойте плавное глиссандо на гласную 'А', проходя через переходные ноты вашего голоса. Стремитесь к сглаживанию звучания при переходе из одного регистра в другой.",
          video: "https://example.com/video16",
          audio: "https://example.com/audio10"
        },
        {
          name: "«Ступени через переходные ноты»",
          description: "На слог 'ню' пойте восходящую и нисходящую последовательность нот, включающую ваши переходные ноты. Добивайтесь однородности звучания.",
          video: "https://example.com/video17",
          audio: "https://example.com/audio11"
        },
        {
          name: "«Закрытые гласные на переходе»",
          description: "Используйте закрытые гласные ('и', 'ю') для упражнений, проходящих через ваши переходные ноты, постепенно открывая звук до 'а'.",
          video: "https://example.com/video18",
          audio: "https://example.com/audio12"
        }
      ]
    }
  ];

  const advancedExercises = [
    {
      id: "advanced-1",
      title: "Упражнения на беглость",
      description: "Развитие вокальной виртуозности и колоратуры",
      level: "Продвинутый",
      duration: "15-20 минут",
      image: "https://images.unsplash.com/photo-1593697921411-eeedcbd23555?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Стаккато на одной ноте»",
          description: "Пойте слог 'та' быстрым стаккато на одной ноте, следя за четкостью артикуляции и активностью диафрагмы. Начните медленно, постепенно увеличивая темп.",
          video: "https://example.com/video19",
          audio: "https://example.com/audio13"
        },
        {
          name: "«Гаммы в быстром темпе»",
          description: "Пойте мажорные и минорные гаммы на слог 'ля' в быстром темпе, сохраняя четкость и ровность звучания каждой ноты.",
          video: "https://example.com/video20",
          audio: "https://example.com/audio14"
        },
        {
          name: "«Групетто»",
          description: "Пойте мелодические украшения (группетто) на слог 'ли', начиная с медленного темпа и постепенно ускоряясь. Следите за точностью интонации и беглостью.",
          video: "https://example.com/video21",
          audio: "https://example.com/audio15"
        }
      ]
    },
    {
      id: "advanced-2",
      title: "Вокальные приёмы для эстрадного вокала",
      description: "Освоение современных вокальных техник",
      level: "Продвинутый",
      duration: "20-25 минут",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop&q=80",
      exercises: [
        {
          name: "«Вибрато»",
          description: "Пойте долгую ноту на слог 'ва', постепенно добавляя естественное вибрато. Начните с медленного вибрато, постепенно увеличивая скорость. Следите за расслабленностью горла.",
          video: "https://example.com/video22",
          audio: "https://example.com/audio16"
        },
        {
          name: "«Мелизмы»",
          description: "Практикуйте мелодические украшения на гласной 'а', добавляя мелизмы (подъезды, спады, мордент) к основной ноте. Изучайте различные стили и техники исполнения.",
          video: "https://example.com/video23",
          audio: "https://example.com/audio17"
        },
        {
          name: "«Субтон»",
          description: "Практикуйте технику субтона (придыхательного звучания) на слогах 'ха', 'хи', переходя от субтонового звучания к обычному и обратно. Сохраняйте объем звука.",
          video: "https://example.com/video24",
          audio: "https://example.com/audio18"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-12 lg:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-playfair text-4xl font-bold tracking-tight sm:text-5xl">
            Вокальные <span className="text-primary">распевки</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Коллекция упражнений и распевок для самостоятельной практики и развития вокальных навыков
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12">
        <Tabs defaultValue="warmup" className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList>
              <TabsTrigger value="warmup">Разминка</TabsTrigger>
              <TabsTrigger value="basic">Базовые упражнения</TabsTrigger>
              <TabsTrigger value="intermediate">Средний уровень</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутый уровень</TabsTrigger>
            </TabsList>
          </div>

          {/* Warmup Exercises Tab */}
          <TabsContent value="warmup">
            <div className="mb-6 text-center">
              <h2 className="font-playfair text-3xl font-bold">Упражнения для разминки</h2>
              <p className="mt-2 text-muted-foreground">
                Важный этап подготовки голосового аппарата к пению
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {warmupExercises.map((exercise) => (
                <Card key={exercise.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={exercise.image}
                      alt={exercise.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{exercise.title}</CardTitle>
                      <Badge variant="outline">{exercise.level}</Badge>
                    </div>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="mr-2 h-4 w-4" />
                      {exercise.duration}
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {exercise.exercises.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-4 text-muted-foreground">{item.description}</p>
                            {item.video && (
                              <Button asChild variant="outline" size="sm" className="mr-2">
                                <a href={item.video} target="_blank" rel="noopener noreferrer">
                                  <Icon name="Video" className="mr-2 h-4 w-4" />
                                  Смотреть видео
                                </a>
                              </Button>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Перед началом пения рекомендуется выполнить все упражнения разминки</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Basic Exercises Tab */}
          <TabsContent value="basic">
            <div className="mb-6 text-center">
              <h2 className="font-playfair text-3xl font-bold">Базовые вокальные упражнения</h2>
              <p className="mt-2 text-muted-foreground">
                Фундаментальные техники для формирования правильных вокальных навыков
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {basicExercises.map((exercise) => (
                <Card key={exercise.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={exercise.image}
                      alt={exercise.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{exercise.title}</CardTitle>
                      <Badge variant="outline">{exercise.level}</Badge>
                    </div>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="mr-2 h-4 w-4" />
                      {exercise.duration}
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {exercise.exercises.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-4 text-muted-foreground">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.video && (
                                <Button asChild variant="outline" size="sm">
                                  <a href={item.video} target="_blank" rel="noopener noreferrer">
                                    <Icon name="Video" className="mr-2 h-4 w-4" />
                                    Смотреть видео
                                  </a>
                                </Button>
                              )}
                              {item.audio && (
                                <Button asChild variant="outline" size="sm">
                                  <a href={item.audio} target="_blank" rel="noopener noreferrer">
                                    <Icon name="Music" className="mr-2 h-4 w-4" />
                                    Слушать пример
                                  </a>
                                </Button>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Ежедневное выполнение этих упражнений поможет сформировать прочную вокальную базу</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Intermediate Exercises Tab */}
          <TabsContent value="intermediate">
            <div className="mb-6 text-center">
              <h2 className="font-playfair text-3xl font-bold">Упражнения среднего уровня</h2>
              <p className="mt-2 text-muted-foreground">
                Для развития гибкости голоса и расширения диапазона
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {intermediateExercises.map((exercise) => (
                <Card key={exercise.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={exercise.image}
                      alt={exercise.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{exercise.title}</CardTitle>
                      <Badge variant="outline">{exercise.level}</Badge>
                    </div>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="mr-2 h-4 w-4" />
                      {exercise.duration}
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {exercise.exercises.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-4 text-muted-foreground">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.video && (
                                <Button asChild variant="outline" size="sm">
                                  <a href={item.video} target="_blank" rel="noopener noreferrer">
                                    <Icon name="Video" className="mr-2 h-4 w-4" />
                                    Смотреть видео
                                  </a>
                                </Button>
                              )}
                              {item.audio && (
                                <Button asChild variant="outline" size="sm">
                                  <a href={item.audio} target="_blank" rel="noopener noreferrer">
                                    <Icon name="Music" className="mr-2 h-4 w-4" />
                                    Слушать пример
                                  </a>
                                </Button>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Эти упражнения помогут перейти на следующий уровень вокального мастерства</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Advanced Exercises Tab */}
          <TabsContent value="advanced">
            <div className="mb-6 text-center">
              <h2 className="font-playfair text-3xl font-bold">Продвинутые упражнения</h2>
              <p className="mt-2 text-muted-foreground">
                Сложные техники для опытных вокалистов
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {advancedExercises.map((exercise) => (
                <Card key={exercise.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={exercise.image}
                      alt={exercise.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{exercise.title}</CardTitle>
                      <Badge variant="outline">{exercise.level}</Badge>
                    </div>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" className="mr-2 h-4 w-4" />
                      {exercise.duration}
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {exercise.exercises.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-4 text-muted-foreground">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.video && (
                                <Button asChild variant="outline" size="sm">
                                  <a href={item.video} target="_blank" rel="noopener noreferrer">
                                    <Icon name="Video" className="mr-2 h-4 w-4" />
                                    Смотреть видео
                                  </a>
                                </Button>
                              )}
                              {item.audio && (
                                <Button asChild variant="outline" size="sm">
                                  <a href={item.audio} target="_blank" rel="noopener noreferrer">
                                    <Icon name="Music" className="mr-2 h-4 w-4" />
                                    Слушать пример
                                  </a>
                                </Button>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">Совершенствуйте вокальную технику с этими упражнениями для профессионалов</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Tips Section */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 text-center font-playfair text-3xl font-bold">Советы по выполнению упражнений</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Регулярность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Выполняйте упражнения ежедневно по 15-30 минут. Регулярная практика даёт лучшие результаты, чем редкие длительные занятия.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon name="Mic2" className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Без напряжения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Следите за отсутствием напряжения в горле, челюсти и шее. Если чувствуете дискомфорт или болезненные ощущения, сделайте паузу.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon name="ArrowUpDown" className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Постепенность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Начинайте с упражнений вашего уровня и постепенно переходите к более сложным. Не торопитесь и не пропускайте важные этапы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-3xl rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="mb-4 font-playfair text-2xl font-bold">
            Хотите улучшить свою вокальную технику?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Запишитесь на индивидуальные занятия с нашими преподавателями и получите персональные рекомендации для развития вашего голоса
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/prices">Записаться на занятие</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/teachers">Наши преподаватели</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VocalExercises;
