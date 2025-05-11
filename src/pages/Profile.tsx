
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  // Статичные данные пользователя
  const user = {
    name: "Анна Смирнова",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    email: "anna.smirnova@example.com",
    phone: "+7 (903) 123-45-67",
    level: "Продвинутый",
    direction: "Эстрадный вокал",
    teacher: "Мария Соловьева",
    startDate: "15 января 2024",
    progress: 72,
  };

  // Данные о занятиях
  const lessons = [
    {
      id: 1,
      date: "18 мая 2025",
      time: "17:00 - 18:00",
      teacher: "Мария Соловьева",
      topic: "Работа над диапазоном",
      status: "upcoming",
    },
    {
      id: 2,
      date: "11 мая 2025",
      time: "17:00 - 18:00",
      teacher: "Мария Соловьева",
      topic: "Дыхательные упражнения",
      status: "completed",
      notes: "Хороший прогресс, рекомендовано практиковать упражнения #3 и #5",
    },
    {
      id: 3,
      date: "4 мая 2025",
      time: "17:00 - 18:00",
      teacher: "Александр Петров (замена)",
      topic: "Работа над артикуляцией",
      status: "completed",
      notes: "Прогресс в артикуляции, продолжить упражнения",
    },
    {
      id: 4,
      date: "27 апреля 2025",
      time: "17:00 - 18:00",
      teacher: "Мария Соловьева",
      topic: "Высокие ноты и фальцет",
      status: "completed",
      notes: "Заметное улучшение в переходе на фальцет, практиковать ежедневно",
    },
  ];

  // Данные о расписании
  const schedule = [
    { day: "Понедельник", time: null },
    { day: "Вторник", time: null },
    { day: "Среда", time: "17:00 - 18:00" },
    { day: "Четверг", time: null },
    { day: "Пятница", time: null },
    { day: "Суббота", time: "12:00 - 13:00" },
    { day: "Воскресенье", time: null },
  ];

  // Данные о заданиях
  const assignments = [
    {
      id: 1,
      title: "Дыхательные упражнения",
      description: "Выполнять ежедневно по 10 минут",
      deadline: "20 мая 2025",
      completed: true,
    },
    {
      id: 2,
      title: "Распевки для расширения диапазона",
      description: "Упражнения 1-5 из учебника, стр. 23",
      deadline: "22 мая 2025",
      completed: false,
    },
    {
      id: 3,
      title: "Подготовка песни «Hallelujah»",
      description: "Выучить текст и мелодию первого куплета и припева",
      deadline: "25 мая 2025",
      completed: false,
    },
  ];

  return (
    <Layout>
      <div className="container max-w-7xl py-8">
        <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-20 w-20 rounded-full border-4 border-accent object-cover"
            />
            <div>
              <h1 className="font-playfair text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">Личный кабинет ученика</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Icon name="Settings" className="h-4 w-4" />
              Настройки
            </Button>
            <Button className="gap-2">
              <Icon name="CalendarPlus" className="h-4 w-4" />
              Записаться на занятие
            </Button>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList>
            <TabsTrigger value="dashboard">Обзор</TabsTrigger>
            <TabsTrigger value="lessons">Занятия</TabsTrigger>
            <TabsTrigger value="schedule">Расписание</TabsTrigger>
            <TabsTrigger value="assignments">Задания</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Направление
                  </CardTitle>
                  <Icon name="Music" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.direction}</div>
                  <p className="text-xs text-muted-foreground">
                    Индивидуальные занятия
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Преподаватель
                  </CardTitle>
                  <Icon name="User" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.teacher}</div>
                  <p className="text-xs text-muted-foreground">
                    Основной преподаватель
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Уровень
                  </CardTitle>
                  <Icon name="LineChart" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.level}</div>
                  <div className="mt-2">
                    <Progress value={user.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    С нами с
                  </CardTitle>
                  <Icon name="Calendar" className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.startDate}</div>
                  <p className="text-xs text-muted-foreground">
                    4 месяца обучения
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Профиль</CardTitle>
                  <CardDescription>
                    Ваша личная информация и контакты
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-[120px_1fr] items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">ФИО:</span>
                    <span>{user.name}</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Email:</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Телефон:</span>
                    <span>{user.phone}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ближайшее занятие</CardTitle>
                  <CardDescription>
                    Информация о предстоящем уроке
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-accent/50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" className="h-4 w-4 text-primary" />
                        <span className="font-medium">{lessons[0].date}</span>
                      </div>
                      <Badge>{lessons[0].time}</Badge>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <Icon name="User" className="h-4 w-4 text-muted-foreground" />
                      <span>{lessons[0].teacher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BookOpen" className="h-4 w-4 text-muted-foreground" />
                      <span>{lessons[0].topic}</span>
                    </div>

                    <div className="mt-4 flex justify-between">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Icon name="Calendar" className="h-4 w-4" />
                        Изменить
                      </Button>
                      <Button size="sm" className="gap-2">
                        <Icon name="Video" className="h-4 w-4" />
                        Подключиться онлайн
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lessons">
            <Card>
              <CardHeader>
                <CardTitle>История занятий</CardTitle>
                <CardDescription>
                  Ваши прошедшие и предстоящие уроки
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`rounded-lg border p-4 ${
                        lesson.status === "upcoming" ? "border-primary/50 bg-accent/20" : ""
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" className="h-4 w-4 text-primary" />
                          <span className="font-medium">{lesson.date}</span>
                        </div>
                        <Badge variant={lesson.status === "upcoming" ? "default" : "outline"}>
                          {lesson.status === "upcoming" ? "Предстоит" : "Завершено"}
                        </Badge>
                      </div>
                      <div className="mb-1 flex items-center gap-2">
                        <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                        <span>{lesson.time}</span>
                      </div>
                      <div className="mb-1 flex items-center gap-2">
                        <Icon name="User" className="h-4 w-4 text-muted-foreground" />
                        <span>{lesson.teacher}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="BookOpen" className="h-4 w-4 text-muted-foreground" />
                        <span>{lesson.topic}</span>
                      </div>
                      {lesson.notes && (
                        <div className="mt-3 rounded-lg bg-muted p-3 text-sm">
                          <div className="mb-1 font-medium">Заметки преподавателя:</div>
                          {lesson.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Расписание занятий</CardTitle>
                <CardDescription>
                  Ваше еженедельное расписание уроков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-7">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className={`flex flex-col rounded-lg border p-4 text-center ${
                        item.time ? "border-primary/50 bg-accent/20" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">{item.day}</span>
                      {item.time ? (
                        <div className="mt-2 flex flex-col gap-1">
                          <Badge variant="outline" className="mx-auto">
                            {item.time}
                          </Badge>
                          <span className="mt-1 text-xs text-muted-foreground">
                            Индивидуальное занятие
                          </span>
                        </div>
                      ) : (
                        <span className="mt-2 text-sm text-muted-foreground">Нет занятий</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments">
            <Card>
              <CardHeader>
                <CardTitle>Домашние задания</CardTitle>
                <CardDescription>
                  Задания от преподавателя для самостоятельной работы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              assignment.completed
                                ? "bg-primary text-white"
                                : "border border-muted"
                            }`}
                          >
                            {assignment.completed && (
                              <Icon name="Check" className="h-3 w-3" />
                            )}
                          </div>
                          <span className="font-medium">{assignment.title}</span>
                        </div>
                        <Badge variant="outline">{assignment.deadline}</Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {assignment.description}
                      </p>
                      {!assignment.completed && (
                        <Button size="sm" className="mt-4 gap-2">
                          <Icon name="Check" className="h-4 w-4" />
                          Отметить выполненным
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
