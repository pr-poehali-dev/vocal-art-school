
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TeacherDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Данные о преподавателях
  const teachersData = {
    maria: {
      name: "Мария Соловьева",
      position: "Эстрадный вокал",
      image: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=600&h=600&fit=crop&q=80",
      experience: "10+ лет опыта",
      specialization: ["Эстрадный вокал", "Поп", "R&B", "Соул"],
      biography: `Мария Соловьева — профессиональная вокалистка и опытный педагог по эстрадному вокалу. Выпускница Московского государственного института культуры по специальности "Эстрадно-джазовое пение".
      
      За плечами Марии более 10 лет преподавательской деятельности и богатый опыт сольных выступлений. Она сотрудничала со многими музыкальными коллективами, участвовала в телевизионных проектах и является лауреатом всероссийских и международных конкурсов.
      
      Свой уникальный подход к обучению Мария строит на глубоком понимании физиологии голоса и психологии обучения. Она виртуозно сочетает различные методики, адаптируя их под конкретного ученика, что позволяет достигать впечатляющих результатов в короткие сроки.`,
      education: [
        "Высшее музыкальное образование, МГИК, факультет эстрадного искусства",
        "Курс повышения квалификации по методике Сета Риггса (Speech Level Singing)",
        "Мастер-классы у ведущих педагогов Berklee College of Music"
      ],
      achievements: [
        "Лауреат международного конкурса «Голоса Планеты»",
        "Участница телепроекта «Голос Страны»",
        "Автор методического пособия по эстрадному вокалу",
        "Более 100 успешных учеников, среди которых профессиональные артисты"
      ],
      teachingStyle: `В своей педагогической работе Мария уделяет особое внимание формированию правильной вокальной техники и развитию музыкального слуха. 

      На занятиях она создает доверительную и творческую атмосферу, которая помогает ученикам преодолеть психологические барьеры и раскрыть свой настоящий голос. 
      
      Программа обучения всегда адаптируется под цели и возможности каждого ученика, при этом сочетая работу над техникой с развитием артистизма и поиском собственного вокального стиля.`,
      reviewsCount: 47,
      rating: 4.9,
      reviews: [
        {
          name: "Анна К.",
          date: "03.04.2025",
          text: "Благодаря Марии я смогла преодолеть страх сцены и раскрыть свой голос. Очень внимательный и талантливый педагог!",
          rating: 5
        },
        {
          name: "Дмитрий В.",
          date: "15.03.2025",
          text: "Занимаюсь с Марией уже полгода, и результат превзошел все ожидания. Методика работы очень эффективная, а занятия всегда интересные.",
          rating: 5
        },
        {
          name: "Светлана М.",
          date: "27.02.2025",
          text: "Привела к Марии свою дочь (12 лет). За три месяца виден огромный прогресс, ребенок с удовольствием ходит на занятия и готовится к первому выступлению.",
          rating: 5
        }
      ],
      availableTimes: [
        { day: "Понедельник", times: ["15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"] },
        { day: "Среда", times: ["14:00 - 15:00", "15:00 - 16:00", "18:00 - 19:00"] },
        { day: "Пятница", times: ["16:00 - 17:00", "17:00 - 18:00"] },
        { day: "Суббота", times: ["11:00 - 12:00", "12:00 - 13:00", "14:00 - 15:00"] }
      ]
    },
    alexander: {
      name: "Александр Петров",
      position: "Джазовый вокал",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=600&h=600&fit=crop&q=80",
      experience: "15+ лет опыта",
      specialization: ["Джазовый вокал", "Скэт", "Импровизация", "Стилистика"],
      biography: `Александр Петров — джазовый вокалист и педагог с 15-летним стажем. Выпускник Российской академии музыки имени Гнесиных по классу эстрадно-джазового вокала.
      
      За свою карьеру Александр выступал на ведущих джазовых фестивалях России и Европы, сотрудничал с известными джазовыми оркестрами и музыкантами. Он является автором уникальной методики обучения джазовому вокалу, основанной на глубоком понимании джазовой идиоматики и импровизации.
      
      В своей педагогической деятельности Александр сочетает классические техники вокала с современным подходом к джазовой стилистике, помогая ученикам не только овладеть техническими аспектами пения, но и развить чувство свинга, грува и умение импровизировать.`,
      education: [
        "Высшее музыкальное образование, РАМ им. Гнесиных",
        "Стажировка в New School for Jazz and Contemporary Music (Нью-Йорк)",
        "Участник мастер-классов Курта Эллинга и Дайан Шур"
      ],
      achievements: [
        "Лауреат международного джазового конкурса Montreux Jazz Voice Competition",
        "Участник джазовых фестивалей «Усадьба Джаз», «Джаз в саду Эрмитаж», Koktebel Jazz Party",
        "Автор серии мастер-классов по джазовой импровизации",
        "Основатель джазового вокального ансамбля «JazzVoice»"
      ],
      teachingStyle: `В основе преподавательской философии Александра лежит комплексный подход к вокальному искусству: от постановки дыхания и работы с резонаторами до тонкостей джазовой стилистики.

      На занятиях Александр уделяет большое внимание развитию музыкального слуха, ритмического чувства и умению взаимодействовать с аккомпанементом. Ученики работают над джазовыми стандартами, осваивают технику скэта и изучают особенности разных джазовых стилей — от традиционного джаза до фьюжн и соул-джаза.
      
      Александр поощряет творческие эксперименты и помогает каждому ученику найти свой уникальный голос в джазовой музыке.`,
      reviewsCount: 38,
      rating: 4.8,
      reviews: [
        {
          name: "Михаил К.",
          date: "20.04.2025",
          text: "Александр открыл для меня удивительный мир джаза. До этого я пел в других стилях, но его подход и глубокое понимание музыки помогли мне освоить джазовую стилистику.",
          rating: 5
        },
        {
          name: "Елена С.",
          date: "05.03.2025",
          text: "Потрясающий педагог! Очень структурированно объясняет сложные вещи, терпеливо работает над ошибками. За полгода я научилась импровизировать и петь скэт.",
          rating: 5
        },
        {
          name: "Игорь М.",
          date: "17.02.2025",
          text: "Профессионал высочайшего класса. Александр не только обучает технике, но и помогает понять философию джаза, его историю и особенности разных периодов.",
          rating: 4
        }
      ],
      availableTimes: [
        { day: "Вторник", times: ["15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"] },
        { day: "Четверг", times: ["14:00 - 15:00", "15:00 - 16:00", "18:00 - 19:00"] },
        { day: "Суббота", times: ["16:00 - 17:00", "17:00 - 18:00"] },
        { day: "Воскресенье", times: ["13:00 - 14:00", "14:00 - 15:00"] }
      ]
    },
    ekaterina: {
      name: "Екатерина Иванова",
      position: "Академический вокал",
      image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&h=600&fit=crop&q=80",
      experience: "12+ лет опыта",
      specialization: ["Академический вокал", "Оперное пение", "Классика", "Камерное пение"],
      biography: `Екатерина Иванова — оперная певица и педагог по академическому вокалу. Выпускница Московской государственной консерватории им. П.И. Чайковского, где после окончания осталась преподавать вокальное мастерство.
      
      Екатерина является лауреатом международных конкурсов оперных певцов и обладает обширным репертуаром, включающим произведения русской и западноевропейской классики. Её выступления отличаются безупречной техникой и глубокой выразительностью.
      
      В педагогической деятельности Екатерина опирается на традиции русской вокальной школы, уделяя особое внимание постановке дыхания, формированию красивого тембра и развитию вокально-технических навыков.`,
      education: [
        "Высшее музыкальное образование, МГК им. П.И. Чайковского",
        "Аспирантура при Московской консерватории",
        "Стажировка в Accademia Teatro alla Scala (Милан, Италия)"
      ],
      achievements: [
        "Лауреат международного конкурса оперных певцов им. Глинки",
        "Солистка Московского музыкального театра",
        "Участница международных фестивалей классической музыки",
        "Автор научных статей по вокальной педагогике"
      ],
      teachingStyle: `Екатерина придерживается классического подхода к преподаванию вокала, опираясь на проверенные временем методики и собственный исполнительский опыт.

      На занятиях она уделяет большое внимание постановке певческого дыхания, формированию правильного звукоизвлечения и работе над дикцией. Важное место в программе обучения занимает работа над художественным образом и выразительностью исполнения.
      
      Екатерина работает с учениками разного возраста и уровня подготовки, адаптируя программу под индивидуальные особенности каждого. Её ученики регулярно становятся лауреатами вокальных конкурсов и продолжают образование в ведущих музыкальных вузах.`,
      reviewsCount: 41,
      rating: 4.9,
      reviews: [
        {
          name: "Ольга Р.",
          date: "12.04.2025",
          text: "Екатерина — настоящий профессионал своего дела. Она помогла мне полностью пересмотреть подход к вокальной технике и открыть новые возможности моего голоса.",
          rating: 5
        },
        {
          name: "Алексей Д.",
          date: "28.02.2025",
          text: "Занимаюсь с Екатериной уже два года. За это время мой диапазон значительно расширился, голос окреп и появилась уверенность в исполнении сложных произведений.",
          rating: 5
        },
        {
          name: "Марина С.",
          date: "05.02.2025",
          text: "Привела к Екатерине свою дочь, которая мечтает о музыкальной карьере. Педагог нашла подход к ребенку и сумела заинтересовать классической музыкой. Очень довольны результатами.",
          rating: 5
        }
      ],
      availableTimes: [
        { day: "Понедельник", times: ["14:00 - 15:00", "15:00 - 16:00", "17:00 - 18:00"] },
        { day: "Среда", times: ["15:00 - 16:00", "16:00 - 17:00", "18:00 - 19:00"] },
        { day: "Четверг", times: ["16:00 - 17:00", "17:00 - 18:00"] },
        { day: "Воскресенье", times: ["12:00 - 13:00", "13:00 - 14:00"] }
      ]
    },
    dmitry: {
      name: "Дмитрий Волков",
      position: "Эстрадно-джазовый вокал",
      image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&h=600&fit=crop&q=80",
      experience: "8+ лет опыта",
      specialization: ["Эстрадный вокал", "Джаз", "Рок", "Соул"],
      biography: `Дмитрий Волков — универсальный вокалист, композитор и аранжировщик с многогранным опытом работы в различных музыкальных стилях. Выпускник Института современного искусства по специальности "Эстрадно-джазовый вокал".
      
      Музыкальная карьера Дмитрия включает сотрудничество с различными музыкальными коллективами, студийную работу и концертные выступления в России и за рубежом. Он легко адаптируется к разным стилям: от рока и поп-музыки до джаза и фанка.
      
      Как педагог, Дмитрий разработал авторскую методику быстрого освоения вокальных приемов, которая помогает ученикам в короткие сроки достичь заметных результатов.`,
      education: [
        "Высшее музыкальное образование, ИСИ, факультет эстрадно-джазового искусства",
        "Курсы повышения квалификации по современным вокальным техникам",
        "Сертифицированный тренер по методике Complete Vocal Technique"
      ],
      achievements: [
        "Участник популярных музыкальных телепроектов",
        "Автор и ведущий серии мастер-классов по эстрадному вокалу",
        "Сессионный вокалист для рекламных и кинопроектов",
        "Создатель онлайн-курса по развитию вокальной техники"
      ],
      teachingStyle: `Дмитрий использует современный подход к обучению вокалу, сочетая традиционные методики с инновационными техниками и своим богатым практическим опытом.

      На занятиях Дмитрий делает акцент на развитие свободы голоса, овладение различными вокальными приемами и формирование индивидуального звучания. Большое внимание уделяется работе с микрофоном и поиску правильного баланса между техникой и эмоциональной выразительностью.
      
      Программа обучения у Дмитрия всегда адаптируется под конкретные цели ученика — будь то подготовка к прослушиванию, работа над конкретным произведением или общее развитие вокальных навыков.`,
      reviewsCount: 35,
      rating: 4.8,
      reviews: [
        {
          name: "Сергей Л.",
          date: "15.04.2025",
          text: "Занимаюсь у Дмитрия всего два месяца, но уже вижу значительный прогресс. Особенно помогли его советы по работе с микрофоном и поиску своего звучания.",
          rating: 5
        },
        {
          name: "Анастасия Ф.",
          date: "02.03.2025",
          text: "Дмитрий помог мне подготовиться к прослушиванию в музыкальный проект. Благодаря его рекомендациям и упражнениям я смогла преодолеть волнение и показать свои лучшие качества.",
          rating: 4
        },
        {
          name: "Кирилл М.",
          date: "25.02.2025",
          text: "Отличный педагог, который действительно знает, о чем говорит. На занятиях всегда интересно, много практики и полезных советов из реального опыта выступлений.",
          rating: 5
        }
      ],
      availableTimes: [
        { day: "Вторник", times: ["16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00"] },
        { day: "Пятница", times: ["15:00 - 16:00", "16:00 - 17:00", "19:00 - 20:00"] },
        { day: "Суббота", times: ["14:00 - 15:00", "15:00 - 16:00"] }
      ]
    },
    olga: {
      name: "Ольга Смирнова",
      position: "Детский вокал",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop&q=80",
      experience: "9+ лет опыта",
      specialization: ["Детский вокал", "Музыкальное развитие", "Подготовка к конкурсам", "Вокальная терапия"],
      biography: `Ольга Смирнова — педагог по детскому вокалу и музыкальному развитию с педагогическим и психологическим образованием. Выпускница Московского педагогического государственного университета по специальности "Музыкальное образование".
      
      За 9 лет работы с детьми Ольга разработала авторскую методику раннего музыкального развития, которая помогает детям от 5 лет осваивать вокальные навыки в игровой форме. Её комплексный подход включает не только вокальные упражнения, но и элементы музыкальной теории, ритмики и сценического движения.
      
      Ольга регулярно готовит детей к участию в вокальных конкурсах и фестивалях, где её ученики неизменно занимают призовые места.`,
      education: [
        "Высшее педагогическое образование, МПГУ, факультет музыкального искусства",
        "Второе высшее образование по детской психологии",
        "Сертификаты по методикам раннего музыкального развития"
      ],
      achievements: [
        "Автор методики «Поющие дети» для детей от 5 лет",
        "Руководитель детского вокального ансамбля «Созвездие»",
        "Лауреат конкурса педагогических инноваций",
        "Ученики — победители всероссийских и международных детских вокальных конкурсов"
      ],
      teachingStyle: `Ольга использует игровой подход к обучению детей, делая занятия увлекательными и разнообразными. Каждый урок включает дыхательную гимнастику, артикуляционные упражнения, распевки и работу над произведениями.

      Важное место в методике Ольги занимает развитие музыкального слуха и ритмического чувства через специальные игры и упражнения. Она учитывает психологические особенности каждого возраста и создает комфортную атмосферу для раскрытия творческого потенциала ребенка.
      
      Ольга активно привлекает родителей к процессу обучения, давая рекомендации по домашним занятиям и музыкальному развитию детей в повседневной жизни.`,
      reviewsCount: 53,
      rating: 5.0,
      reviews: [
        {
          name: "Мария К.",
          date: "23.04.2025",
          text: "Моей дочери 6 лет, и она с огромным удовольствием ходит на занятия к Ольге. За полгода ребенок научился чисто интонировать, выучил много песен и даже выступил на школьном концерте.",
          rating: 5
        },
        {
          name: "Павел С.",
          date: "10.03.2025",
          text: "Замечательный педагог! Ольга нашла подход к нашему сыну, который сначала стеснялся петь. Теперь он с нетерпением ждет каждого занятия и поет дома постоянно.",
          rating: 5
        },
        {
          name: "Наталья В.",
          date: "02.02.2025",
          text: "Благодаря Ольге моя дочь стала победителем городского конкурса юных вокалистов. Педагог очень ответственно подходит к подготовке, работает над каждой деталью исполнения.",
          rating: 5
        }
      ],
      availableTimes: [
        { day: "Понедельник", times: ["13:00 - 14:00", "14:00 - 15:00", "16:00 - 17:00"] },
        { day: "Среда", times: ["13:00 - 14:00", "14:00 - 15:00", "16:00 - 17:00"] },
        { day: "Суббота", times: ["10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"] }
      ]
    },
    sergey: {
      name: "Сергей Николаев",
      position: "Рок-вокал",
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=600&h=600&fit=crop&q=80",
      experience: "11+ лет опыта",
      specialization: ["Рок-вокал", "Экстрим-вокал", "Сценическое движение", "Работа с микрофоном"],
      biography: `Сергей Николаев — рок-вокалист, фронтмен известной рок-группы и преподаватель техники рок-вокала. Выпускник Российской академии музыки имени Гнесиных по классу эстрадно-джазового вокала.
      
      Сергей имеет более 11 лет опыта концертной деятельности, выступал на крупнейших площадках страны и принимал участие в музыкальных фестивалях. Как педагог, он специализируется на различных техниках рок-вокала, включая расщепление, гроул, скриминг и другие приемы экстремального вокала.
      
      В своей преподавательской деятельности Сергей уделяет особое внимание здоровым подходам к исполнению сложных вокальных приемов, что позволяет его ученикам осваивать рок-стилистику без вреда для голоса.`,
      education: [
        "Высшее музыкальное образование, РАМ им. Гнесиных",
        "Сертификаты по технике рок-вокала от международных вокальных школ",
        "Обучение у ведущих специалистов по экстремальному вокалу"
      ],
      achievements: [
        "Фронтмен рок-группы с выпущенными альбомами и клипами",
        "Участник крупнейших рок-фестивалей России и СНГ",
        "Автор методики безопасного освоения техник расщепления",
        "Создатель онлайн-курса по рок-вокалу"
      ],
      teachingStyle: `В своей преподавательской работе Сергей делает акцент на безопасном и грамотном освоении техник рок-вокала. Он начинает с постановки правильного дыхания и базовой вокальной техники, постепенно добавляя специфические рок-приемы.

      На занятиях большое внимание уделяется работе с микрофоном и сценическому движению, что важно для рок-исполнителя. Сергей помогает ученикам найти свой собственный стиль и звучание, избегая слепого копирования известных вокалистов.
      
      Сергей работает с учениками разного уровня подготовки — от начинающих до профессиональных музыкантов, которые хотят улучшить свою технику или освоить новые вокальные приемы.`,
      reviewsCount: 31,
      rating: 4.7,
      reviews: [
        {
          name: "Андрей М.",
          date: "08.04.2025",
          text: "Занимаюсь у Сергея около года. За это время освоил технику расщепления и научился контролировать свой голос. Все приемы показываются с акцентом на безопасность, что очень ценно.",
          rating: 5
        },
        {
          name: "Ирина Л.",
          date: "19.03.2025",
          text: "Я вокалистка в рок-группе, пришла к Сергею для улучшения техники. Он помог мне расширить диапазон и освоить новые приемы, которые сделали мое исполнение более выразительным.",
          rating: 4
        },
        {
          name: "Максим К.",
          date: "27.02.2025",
          text: "Сергей — настоящий профессионал своего дела. Объясняет все понятно и доступно, много работает над ошибками. После его занятий значительно улучшилась моя выносливость на концертах.",
          rating: 5
        }
      ],
      availableTimes: [
        { day: "Вторник", times: ["17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00"] },
        { day: "Четверг", times: ["17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00"] },
        { day: "Воскресенье", times: ["14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"] }
      ]
    }
  };

  // Получаем данные выбранного преподавателя или используем данные по умолчанию
  const teacher = teachersData[id as keyof typeof teachersData] || teachersData.maria;

  // Вычисляем среднюю оценку преподавателя
  const averageRating = teacher.reviews.reduce((sum, review) => sum + review.rating, 0) / teacher.reviews.length;

  // Генерируем звезды для рейтинга
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Icon 
          key={i} 
          name="Star" 
          className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted"}`} 
        />
      ));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/50 to-background py-12">
        <div className="container">
          <div className="mb-8">
            <Link to="/teachers" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <Icon name="ChevronLeft" className="h-4 w-4" />
              Все преподаватели
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="outline">{teacher.experience}</Badge>
                {teacher.specialization.map((spec, index) => (
                  <Badge key={index} variant="secondary">{spec}</Badge>
                ))}
              </div>
              <h1 className="font-playfair text-3xl font-bold tracking-tight sm:text-4xl">
                {teacher.name}
              </h1>
              <p className="mt-2 flex items-center gap-2 text-lg text-muted-foreground">
                <Icon name="Mic2" className="h-5 w-5 text-primary" />
                {teacher.position}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex">{renderStars(averageRating)}</div>
                <span className="text-sm font-medium">{averageRating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({teacher.reviewsCount} отзывов)</span>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/prices">
                    Записаться на урок
                    <Icon name="Calendar" className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/prices">Узнать стоимость</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="container py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 sm:grid-cols-4">
            <TabsTrigger value="about">О преподавателе</TabsTrigger>
            <TabsTrigger value="approach">Подход к обучению</TabsTrigger>
            <TabsTrigger value="schedule">Расписание</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-playfair text-2xl font-bold">Биография</h2>
                <div className="space-y-4 text-muted-foreground">
                  {teacher.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-8">
                  <h2 className="mb-4 font-playfair text-2xl font-bold">Образование</h2>
                  <ul className="space-y-2">
                    {teacher.education.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="GraduationCap" className="mt-1 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 font-playfair text-2xl font-bold">Достижения</h2>
                  <ul className="space-y-2">
                    {teacher.achievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Award" className="mt-1 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="approach">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-playfair text-2xl font-bold">Подход к преподаванию</h2>
                <div className="space-y-4 text-muted-foreground">
                  {teacher.teachingStyle.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-4 font-playfair text-2xl font-bold">Чему вы научитесь</h2>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="flex items-start gap-3 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon name="Mic2" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Вокальная техника</h3>
                        <p className="text-sm text-muted-foreground">Правильное дыхание, звукоизвлечение, расширение диапазона</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-3 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon name="Music" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Музыкальность и стилистика</h3>
                        <p className="text-sm text-muted-foreground">Развитие музыкального слуха, чувства ритма и стилевых особенностей</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-3 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon name="Sparkles" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Артистизм и выразительность</h3>
                        <p className="text-sm text-muted-foreground">Работа с образом, сценическое движение, эмоциональная подача</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-3 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon name="Disc" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Репертуар и исполнительство</h3>
                        <p className="text-sm text-muted-foreground">Работа над индивидуальным репертуаром, подготовка к выступлениям</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="space-y-6">
              <h2 className="font-playfair text-2xl font-bold">Расписание занятий</h2>
              <p className="text-muted-foreground">
                Выберите удобное для вас время. Продолжительность одного занятия: 60 минут.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teacher.availableTimes.map((day, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{day.day}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        {day.times.map((time, timeIndex) => (
                          <Badge key={timeIndex} variant="outline" className="justify-center">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-primary/10 p-4">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Запись на занятия</h3>
                    <p className="text-sm text-muted-foreground">
                      Для бронирования времени занятия позвоните по телефону <span className="font-medium">+7 (800) 123-45-67</span> или напишите в мессенджеры. 
                      Также вы можете заполнить форму на странице &quot;Цены&quot;, и мы свяжемся с вами для подтверждения времени.
                    </p>
                    <Button asChild className="mt-4 gap-2">
                      <Link to="/prices">
                        Записаться на занятие
                        <Icon name="ArrowRight" className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-playfair text-2xl font-bold">Отзывы учеников</h2>
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(averageRating)}</div>
                  <span className="font-medium">{averageRating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({teacher.reviewsCount} отзывов)</span>
                </div>
              </div>
              <div className="space-y-4">
                {teacher.reviews.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="font-semibold">{review.name}</div>
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">{review.text}</p>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Показать больше отзывов</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Other Teachers */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="mb-8 font-playfair text-2xl font-bold">Другие преподаватели</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(teachersData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, otherTeacher]) => (
                <Card key={key} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="aspect-square h-48 overflow-hidden">
                    <img
                      src={otherTeacher.image}
                      alt={otherTeacher.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{otherTeacher.name}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{otherTeacher.position}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/teachers/${key}`}>Подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <div className="mx-auto max-w-3xl rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="font-playfair text-2xl font-bold">
            Готовы начать заниматься с {teacher.name}?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Запишитесь на пробный урок и начните свой путь к вокальному мастерству уже сегодня!
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link to="/prices">Записаться на пробный урок</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeacherDetail;
