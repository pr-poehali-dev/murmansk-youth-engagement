import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const benefits = [
    { icon: "Gift", title: "Льготы", description: "Региональные программы поддержки молодежи", color: "bg-blue-50", count: "12+" },
    { icon: "Palette", title: "Культура", description: "Мероприятия, выставки, концерты", color: "bg-purple-50", count: "48+" },
    { icon: "Trophy", title: "Спорт", description: "Секции, тренировки, соревнования", color: "bg-green-50", count: "35+" },
    { icon: "GraduationCap", title: "Образование", description: "Программы, курсы и возможности для обучения", color: "bg-orange-50", count: "24+" }
  ];

  const льготы = [
    { title: "Социальная поддержка", description: "На карту жителя можно зачислять пенсии, пособия, стипендии и другие социальные выплаты. Это позволяет получать все меры поддержки на одну карту.", tags: ["Жилье", "До 35 лет"] },
    { title: "Скидки и бонусы от партнеров", description: "Финансирование дополнительного образования", tags: ["Учеба", "18-30 лет"] },
    { title: "Льготный электронный кошелёк", description: "Позволяет оплачивать разовые поездки со скидкой 50% на городских маршрутах и 60% на пригородных.", tags: ["Транспорт", "Студенты"] },
    { title: "Спортивные субсидии", description: "Компенсация затрат на занятия спортом", tags: ["Спорт", "До 25 лет"] }
  ];

  const культура = [
    { title: "Фестиваль Северного сияния", date: "15 марта 2025", location: "Центр культуры", type: "Фестиваль" },
    { title: "Выставка молодых художников", date: "22 марта 2025", location: "Художественный музей", type: "Выставка" },
    { title: "Концерт местных групп", date: "5 апреля 2025", location: "Филармония", type: "Концерт" },
    { title: "Мастер-класс по фотографии", date: "12 апреля 2025", location: "Медиа-центр", type: "Мастер-класс" }
  ];

  const спорт = [
    { title: "Футбольная секция", description: "Тренировки 3 раза в неделю", location: "Стадион Север", age: "16-25 лет" },
    { title: "Плавание", description: "Бассейн олимпийского стандарта", location: "Спорткомплекс Волна", age: "14-30 лет" },
    { title: "Бокс", description: "Профессиональная подготовка", location: "ФОК Чемпион", age: "18-35 лет" },
    { title: "Йога и фитнес", description: "Групповые занятия", location: "Фитнес-центр Энергия", age: "16+" }
  ];

  const образование = [
    { title: "Курсы программирования", description: "Изучение Python, JavaScript и веб-разработки", duration: "6 месяцев", format: "Онлайн/Офлайн" },
    { title: "Английский язык", description: "Интенсивные курсы разговорного английского", duration: "3 месяца", format: "Группы" },
    { title: "Бизнес-школа для молодежи", description: "Основы предпринимательства и стартапы", duration: "4 месяца", format: "Вебинары" },
    { title: "Дизайн и креатив", description: "Графический дизайн, UI/UX, видеомонтаж", duration: "5 месяцев", format: "Практика" },
    { title: "Цифровой маркетинг", description: "SMM, таргетированная реклама, аналитика", duration: "2 месяца", format: "Онлайн" }
  ];

  const новости = [
    { title: "Открытие нового спортивного комплекса", description: "В марте откроется современный ФОК с бассейном и тренажерными залами", date: "27 октября 2025", category: "Спорт" },
    { title: "Расширение программы молодежных грантов", description: "Увеличен размер грантов на образовательные проекты до 500 тысяч рублей", date: "25 октября 2025", category: "Льготы" },
    { title: "Фестиваль Северного сияния 2025", description: "Программа фестиваля включает выставки, концерты и мастер-классы", date: "20 октября 2025", category: "Культура" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2">
              <Icon name="MapPin" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Единая карта жителя
Мурманской области</h1>
              <p className="text-xs text-gray-600">Молодежный портал</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => setActiveSection("benefits")} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Льготы
            </button>
            <button onClick={() => setActiveSection("culture")} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Культура
            </button>
            <button onClick={() => setActiveSection("sport")} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Спорт
            </button>
            <button onClick={() => setActiveSection("card")} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Карта
            </button>
          </nav>
          <Button className="hidden md:flex">Войти</Button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-300 via-cyan-400 via-blue-500 to-purple-600 p-12 md:p-20">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Карта жителя<br />Мурманской области
              </h2>
              <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
                Единая карта для получения льгот, бонусов и услуг
              </p>
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-50 text-primary">
                Получить карту
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-50 border-transparent">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary rounded-lg p-2">
                    <Icon name="Newspaper" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-2xl">Новости</CardTitle>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  Все новости
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {новости.map((новость, index) => (
                  <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{новость.category}</Badge>
                        <span className="text-xs text-gray-500">{новость.date}</span>
                      </div>
                      <CardTitle className="text-lg mb-2">{новость.title}</CardTitle>
                      <CardDescription className="text-sm">{новость.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="benefits" className="container mx-auto px-4 py-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              <Button 
                variant={activeSection === null ? "default" : "ghost"}
                onClick={() => setActiveSection(null)}
                className="whitespace-nowrap"
              >
                Все вопросы
              </Button>
              {benefits.map((benefit, index) => (
                <Button
                  key={index}
                  variant={activeSection === benefit.title.toLowerCase() ? "default" : "ghost"}
                  onClick={() => setActiveSection(benefit.title.toLowerCase())}
                  className="whitespace-nowrap"
                >
                  {benefit.title}
                </Button>
              ))}
            </div>
            
            {activeSection === null && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-primary/50 bg-white"
                    onClick={() => setActiveSection(benefit.title.toLowerCase())}
                  >
                    <CardHeader>
                      <div className={`${benefit.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                        <Icon name={benefit.icon as any} className="text-primary" size={24} />
                      </div>
                      <CardTitle className="flex items-center justify-between">
                        {benefit.title}
                        <Badge variant="secondary">{benefit.count}</Badge>
                      </CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {activeSection === "льготы" && (
          <section className="container mx-auto px-4 pb-16 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid gap-4">
                {льготы.map((льгота, index) => (
                  <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <CardTitle className="text-xl">{льгота.title}</CardTitle>
                          <CardDescription className="text-base">{льгота.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        {льгота.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "культура" && (
          <section className="container mx-auto px-4 pb-16 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid gap-4">
                {культура.map((событие, index) => (
                  <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3 flex flex-col items-center justify-center min-w-[60px]">
                          <div className="text-2xl font-bold text-primary">
                            {событие.date.split(' ')[0]}
                          </div>
                          <div className="text-xs text-gray-600">
                            {событие.date.split(' ')[1]}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">{событие.title}</CardTitle>
                            <Badge>{событие.type}</Badge>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <Icon name="MapPin" size={14} />
                            {событие.location}
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm">Записаться</Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "спорт" && (
          <section className="container mx-auto px-4 pb-16 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid gap-4">
                {спорт.map((секция, index) => (
                  <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-100 rounded-full p-2">
                              <Icon name="Trophy" className="text-green-600" size={20} />
                            </div>
                            <CardTitle className="text-xl">{секция.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{секция.description}</CardDescription>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              {секция.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              {секция.age}
                            </div>
                          </div>
                        </div>
                        <Button size="sm">Записаться</Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "образование" && (
          <section className="container mx-auto px-4 pb-16 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid gap-4">
                {образование.map((курс, index) => (
                  <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="bg-orange-100 rounded-full p-2">
                              <Icon name="GraduationCap" className="text-orange-600" size={20} />
                            </div>
                            <CardTitle className="text-xl">{курс.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{курс.description}</CardDescription>
                          <div className="flex gap-4 pt-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Icon name="Clock" size={12} />
                              {курс.duration}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Icon name="Monitor" size={12} />
                              {курс.format}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm">Записаться</Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "карта" && (
          <section className="container mx-auto px-4 pb-16 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8">
              <Card className="mb-8 bg-gradient-to-br from-primary to-blue-700 text-white border-0">
                <CardHeader className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">Карта жителя Мурманской области</CardTitle>
                      <CardDescription className="text-blue-100">
                        Ваш универсальный ключ к городским сервисам
                      </CardDescription>
                    </div>
                    <Icon name="CreditCard" className="text-white" size={40} />
                  </div>
                  <div className="pt-8 font-mono text-xl tracking-wider">
                    •••• •••• •••• 5100
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-blue-200 mb-1">Держатель</div>
                      <div className="font-semibold">Иван Иванов</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-blue-200 mb-1">Действует до</div>
                      <div className="font-semibold">12/2028</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {cardFeatures.map((feature, index) => (
                  <Card key={index} className="bg-white">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <Icon name={feature.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Как получить карту?</CardTitle>
                  <CardDescription className="space-y-3 pt-4">
                    <div className="flex gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <p>Подайте заявку онлайн через портал госуслуг или лично в МФЦ</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <p>Дождитесь SMS с уведомлением о готовности карты (7-10 дней)</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <p>Получите карту в ближайшем отделении или через курьера</p>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        )}

        <section className="bg-gray-50 py-16 mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Присоединяйтесь к молодежному сообществу</h3>
              <p className="text-gray-600">
                Будьте в курсе новых мероприятий, программ поддержки и возможностей для развития
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Send" size={20} />
                  Telegram
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  ВКонтакте
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Карта51</h4>
              <p className="text-sm">Молодежный информационный портал Мурманской области</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setActiveSection("льготы")} className="hover:text-white transition-colors">Льготы</button></li>
                <li><button onClick={() => setActiveSection("культура")} className="hover:text-white transition-colors">Культура</button></li>
                <li><button onClick={() => setActiveSection("спорт")} className="hover:text-white transition-colors">Спорт</button></li>
                <li><button onClick={() => setActiveSection("карта")} className="hover:text-white transition-colors">Карта</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm">
                <li>г. Мурманск</li>
                <li>ул. Ленина, 1</li>
                <li>+7 (8152) 123-456</li>
                <li>info@karta51.ru</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обратная связь</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© 2025 Карта51. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;