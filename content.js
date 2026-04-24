const SITE_DATA = {
  assets: { logo: "logo.png", karcherLogo: "karcher_logo.jpg" },
  phone: "+48517744957",
  displayPhone: "+48 517 744 957",
  formEmail: "expresscleanpoznan@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/_express_clean_?igsh=ajUzYjE4b2VmMjc%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1DPE4T3uR4/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@express_clean_poznan?_r=1&_t=ZN-95mXxnoQLx8",
    youtube: "https://youtube.com/@expressclean-v6s?si=egxbTW01lZ10V-ZU"
  },
  media: {
    gallery: [
      {
        title: {pl:"Narożnik — przed i po", en:"Sectional sofa — before and after", ua:"Кутовий диван — до та після", ru:"Угловой диван — до и после"},
        src: "hero_before_after_sofa.png",
        alt: {pl:"Przed i po czyszczeniu narożnika", en:"Before and after sectional sofa cleaning", ua:"До та після чищення кутового дивана", ru:"До и после чистки углового дивана"}
      },
      {
        title: {pl:"Materac — przed i po", en:"Mattress — before and after", ua:"Матрац — до та після", ru:"Матрас — до и после"},
        src: "mattress_before_after.png",
        alt: {pl:"Przed i po czyszczeniu materaca", en:"Before and after mattress cleaning", ua:"До та після чищення матраца", ru:"До и после чистки матраса"}
      }
    ],
    videos: [
      {
        title: {
          pl: "Czyszczenie tapicerki — fragment realizacji",
          en: "Upholstery cleaning — project clip",
          ua: "Чищення оббивки — фрагмент роботи",
          ru: "Чистка обивки — фрагмент работы"
        },
        src: "video.mp4"
      }
    ]
  },
  translations: {
    pl: {
      quick_order:'Zamów teraz', nav_label:'Nawigacja strony', nav_services:'Usługi', nav_prices:'Cennik', nav_why:'Dlaczego my', nav_gallery:'Efekty', nav_reviews:'Opinie', nav_contact:'Kontakt', topbarAlt:'Kärcher logo', eyebrow:'⭐ Profesjonalne pranie tapicerki w Poznaniu',
      hero_title:'Pranie tapicerki w Poznaniu z dojazdem w 24h', hero_sub:'Usuwamy plamy, zapach i roztocza. Szybkie schnięcie w 4–6 godzinach.',
      point1:'Gwarancja efektu — albo poprawiamy gratis', point2:'Używamy certyfikowanej chemii Kärcher', point3:'Realne zdjęcia przed i po czyszczeniu', point4:'Szybka wycena bez ukrytych kosztów',
      cta_order:'Zamów czyszczenie', cta_price:'Sprawdź cenę',
      services_title:'Nasze usługi', services_sub:'Profesjonalne czyszczenie dla domu, dzieci i samochodu',
      srv1_t:'Kanapy i narożniki', srv1_d:'Usuwamy plamy, kurz i zapachy z tapicerki meblowej.', srv2_t:'Materace', srv2_d:'Eliminujemy roztocza i bakterie dla zdrowszego snu.',
      srv3_t:'Tapicerka samochodowa', srv3_d:'Podstawowe, zaawansowane i kompleksowe czyszczenie wnętrza auta.', srv4_t:'Dywany i wykładziny', srv4_d:'Skuteczne pranie i odświeżenie powierzchni w domu i biurze.',
      srv5_t:'Rzeczy dziecięce', srv5_d:'Pluszaki, gondole i foteliki czyścimy bezpieczną chemią.', srv6_t:'Usuwanie zapachów', srv6_d:'Neutralizacja moczu zwierząt, wymiocin, wilgoci i dymu.',
      prices_title:'Cennik usług', prices_sub:'Podajemy orientacyjne ceny. Dokładną wycenę otrzymasz przed usługą.', price_box1:'Meble i rzeczy domowe',
      p1:'Krzesło', p2:'Pufa', p3:'Fotel', p4:'Wersalka', p5:'Narożnik', p6:'Materac', p7:'Pluszaki', p8:'Gondola wózka dziecięcego', p9:'Fotelik samochodowy dla dziecka', p10:'Dywan', p11:'Wykładzina',
      free_tag:'Neutralizacja nieprzyjemnych zapachów gratis przy dużej kanapie lub materacu', price_box2:'Czyszczenie samochodu', car1:'Pranie podstawowe tapicerki (przednie fotele)', car2:'Pranie zaawansowane (fotele i kanapa)', car3:'Pranie kompleksowe (fotele, kanapa, boczki, wykładzina, podsufitka, bagażnik)',
      price_note:'Ostateczna cena zależy od stopnia zabrudzenia. Zawsze informujemy o kosztach przed rozpoczęciem pracy.',
      why_title:'Dlaczego klienci wybierają nas', why_sub:'Szybko, skutecznie i bez ryzyka', why1_t:'Szybki dojazd', why1_d:'Przyjeżdżamy nawet w ciągu 24 godzin.', why2_t:'Szybkie schnięcie', why2_d:'Tapicerka jest gotowa do użytku po 4–6 godzinach.',
      badge:'Ważna zaleta', why3_t:'Gwarancja efektu', why3_d:'Jeśli efekt nie będzie satysfakcjonujący — poprawimy bezpłatnie.', why4_t:'Bezpieczna chemia', why4_d:'Bezpieczna dla dzieci, zwierząt i alergików.',
      ba_title:'Efekty naszej pracy — zobacz różnicę', ba_sub:'Poniżej możesz dodawać nowe zdjęcia i wideo bez przerabiania całego układu strony.', ba1_t:'To samo miejsce, ten sam kadr', ba1_d:'Bez sztuczek i bez zmienionego tła.', ba2_t:'Widoczny efekt od razu', ba2_d:'Usuwamy nawet trudne zabrudzenia i nieprzyjemne zapachy.', gallery_title:'Galeria zdjęć przed i po', video_title:'Wideo z realizacji', video_empty:'Tutaj możesz później dodać własne filmy.',
      reviews_title:'Opinie klientów', reviews_text:'Fragmenty opinii osób, które skorzystały z czyszczenia w Poznaniu.',
      reviews_1_name:'Anna K.', reviews_1_date:'2 tygodnie temu', reviews_1_text:'Narożnik był mocno zabrudzony po dzieciach i kotach. Po czyszczeniu wygląda jak nowy, nieprzyjemny zapach zniknął. Wszystko wyjaśnili przed startem — polecam.',
      reviews_2_name:'Piotr M.', reviews_2_date:'marzec 2025', reviews_2_text:'Materac jak odświeżony, „stary” zapach ustąpił. Punktualni, sprzęt profesjonalny, bez chaosu w mieszkaniu.',
      reviews_3_name:'Magdalena W.', reviews_3_date:'miesiąc temu', reviews_3_text:'Tapicerka w samochodzie — jak nowa. Dobry kontakt telefoniczny i przyjazd w umówionym czasie.',
      final_title:'Zamów czyszczenie już dziś', final_sub:'Szybka wycena, jasne warunki i kontakt pod numerem telefonu +48 517 744 957.', final_call:'Zadzwoń: +48 517 744 957', final_order:'Szybkie zamówienie',
      form_title:'Formularz szybkiego zamówienia', form_sub:'Wypełnij formularz, a oddzwonimy lub odpiszemy jak najszybciej.', form_name:'Imię', form_phone:'Telefon', form_city:'Miasto / dzielnica', form_service:'Usługa', form_message:'Wiadomość', form_submit:'Wyślij zgłoszenie', form_sending:'Wysyłanie...',
      service_1:'Kanapa / narożnik', service_2:'Materac', service_3:'Auto', service_4:'Dywan / wykładzina', service_5:'Inne', back_top:'Na górę strony', footer:'© 2026 ExpressClean Poznań'
    },
    en: {
      quick_order:'Order now', nav_label:'Site navigation', nav_services:'Services', nav_prices:'Prices', nav_why:'Why us', nav_gallery:'Gallery', nav_reviews:'Reviews', nav_contact:'Contact', topbarAlt:'Kärcher logo', eyebrow:'⭐ Professional upholstery cleaning in Poznań',
      hero_title:'Upholstery cleaning in Poznań with service in 24h', hero_sub:'We remove stains, odors and dust mites. Fast drying in 4–6 hours.',
      point1:'Guaranteed result — or we correct it for free', point2:'We use certified Kärcher cleaning products', point3:'Real before-and-after cleaning photos', point4:'Fast quote with no hidden costs',
      cta_order:'Order cleaning', cta_price:'Check prices',
      services_title:'Our services', services_sub:'Professional cleaning for home, children and car',
      srv1_t:'Sofas and sectional sofas', srv1_d:'We remove stains, dust and odors from upholstered furniture.', srv2_t:'Mattresses', srv2_d:'We eliminate dust mites and bacteria for healthier sleep.',
      srv3_t:'Car upholstery', srv3_d:'Basic, advanced and full interior cleaning.', srv4_t:'Carpets and floor coverings', srv4_d:'Effective washing and refreshing for home and office surfaces.',
      srv5_t:'Children’s items', srv5_d:'Plush toys, stroller bassinets and child seats cleaned with safe products.', srv6_t:'Odor removal', srv6_d:'Neutralization of pet urine, vomit, dampness and smoke.',
      prices_title:'Price list', prices_sub:'These are estimated prices. You receive the exact quote before the service.', price_box1:'Furniture and home items',
      p1:'Chair', p2:'Pouffe', p3:'Armchair', p4:'Sofa bed', p5:'Sectional sofa', p6:'Mattress', p7:'Plush toys', p8:'Stroller bassinet', p9:'Child car seat', p10:'Carpet', p11:'Floor covering',
      free_tag:'Odor neutralization free for a large sofa or mattress', price_box2:'Car cleaning', car1:'Basic upholstery cleaning (front seats)', car2:'Advanced cleaning (seats and rear bench)', car3:'Full cleaning (seats, rear bench, side panels, floor, headliner, trunk)',
      price_note:'Final price depends on the level of dirt. We always confirm the cost before starting.',
      why_title:'Why customers choose us', why_sub:'Fast, effective and risk-free', why1_t:'Fast arrival', why1_d:'We can arrive even within 24 hours.', why2_t:'Fast drying', why2_d:'Furniture is ready to use after 4–6 hours.',
      badge:'Key benefit', why3_t:'Guaranteed result', why3_d:'If the result is not satisfactory, we will correct it free of charge.', why4_t:'Safe cleaning products', why4_d:'Safe for children, pets and allergy sufferers.',
      ba_title:'The result of our work — see the difference', ba_sub:'Below, you can add new photos and videos later without rebuilding the whole page layout.', ba1_t:'The same place, the same frame', ba1_d:'No tricks and no changed background.', ba2_t:'Visible effect immediately', ba2_d:'We remove even difficult dirt and unpleasant odors.', gallery_title:'Before-and-after photo gallery', video_title:'Project videos', video_empty:'You can add your own videos here later.',
      reviews_title:'Customer reviews', reviews_text:'Notes from people who used our cleaning service in Poznań.',
      reviews_1_name:'Anna K.', reviews_1_date:'2 weeks ago', reviews_1_text:'Our sectional was badly stained by kids and cats. After cleaning it looks like new and the odor is gone. They explained everything upfront — recommended.',
      reviews_2_name:'Piotr M.', reviews_2_date:'March 2025', reviews_2_text:'The mattress feels refreshed and the old smell is gone. On time, professional equipment, no mess at home.',
      reviews_3_name:'Magdalena W.', reviews_3_date:'A month ago', reviews_3_text:'Car upholstery — huge difference. Easy to reach by phone and they arrived in the agreed window.',
      final_title:'Order cleaning today', final_sub:'Fast quote, clear terms and direct contact at +48 517 744 957.', final_call:'Call: +48 517 744 957', final_order:'Quick order',
      form_title:'Quick order form', form_sub:'Fill in the form and we will call or message you back as soon as possible.', form_name:'Name', form_phone:'Phone', form_city:'City / district', form_service:'Service', form_message:'Message', form_submit:'Send request', form_sending:'Sending...',
      service_1:'Sofa / sectional sofa', service_2:'Mattress', service_3:'Car', service_4:'Carpet / floor covering', service_5:'Other', back_top:'Back to top', footer:'© 2026 ExpressClean Poznań'
    },
    ua: {
      quick_order:'Замовити зараз', nav_label:'Навігація по сайту', nav_services:'Послуги', nav_prices:'Ціни', nav_why:'Чому ми', nav_gallery:'Роботи', nav_reviews:'Відгуки', nav_contact:'Контакт', topbarAlt:'Логотип Kärcher', eyebrow:'⭐ Професійна хімчистка меблів у Познані',
      hero_title:'Хімчистка меблів у Познані з виїздом за 24 години', hero_sub:'Видаляємо плями, запахи та пилових кліщів. Висихання за 4–6 годин.',
      point1:'Гарантія результату — або безкоштовно виправимо', point2:'Використовуємо сертифіковану хімію Kärcher', point3:'Реальні фото до та після чищення', point4:'Швидкий прорахунок без прихованих доплат',
      cta_order:'Замовити хімчистку', cta_price:'Переглянути ціни',
      services_title:'Наші послуги', services_sub:'Професійне чищення для дому, дітей та авто',
      srv1_t:'Дивани та кутові дивани', srv1_d:'Видаляємо плями, пил і запахи з м’яких меблів.', srv2_t:'Матраци', srv2_d:'Усуваємо пилових кліщів і бактерії для здоровішого сну.',
      srv3_t:'Автотекстиль', srv3_d:'Базове, розширене та комплексне чищення салону авто.', srv4_t:'Килими та покриття', srv4_d:'Ефективне прання та освіження поверхонь у домі й офісі.',
      srv5_t:'Дитячі речі', srv5_d:'Іграшки, люльки та автокрісла очищуємо безпечною хімією.', srv6_t:'Усунення запахів', srv6_d:'Нейтралізація сечі тварин, блювоти, вологи й диму.',
      prices_title:'Ціни на послуги', prices_sub:'Це орієнтовні ціни. Точну вартість ви отримуєте до початку роботи.', price_box1:'Меблі та домашні речі',
      p1:'Стілець', p2:'Пуф', p3:'Крісло', p4:'Диван-книжка', p5:'Кутовий диван', p6:'Матрац', p7:'Плюшеві іграшки', p8:'Люлька дитячого візка', p9:'Дитяче автокрісло', p10:'Килим', p11:'Покриття',
      free_tag:'Нейтралізація неприємних запахів безкоштовно для великого дивана або матраца', price_box2:'Чищення авто', car1:'Базове чищення текстилю (передні сидіння)', car2:'Розширене чищення (сидіння і задній диван)', car3:'Комплексне чищення (сидіння, задній диван, боковини, підлога, стеля, багажник)',
      price_note:'Фінальна ціна залежить від ступеня забруднення. Ми завжди погоджуємо вартість до початку роботи.',
      why_title:'Чому клієнти обирають нас', why_sub:'Швидко, ефективно і без ризику', why1_t:'Швидкий виїзд', why1_d:'Можемо приїхати навіть протягом 24 годин.', why2_t:'Швидке висихання', why2_d:'Меблі готові до використання за 4–6 годин.',
      badge:'Важлива перевага', why3_t:'Гарантія результату', why3_d:'Якщо результат не буде задовільним — безкоштовно виправимо.', why4_t:'Безпечна хімія', why4_d:'Безпечна для дітей, тварин та алергіків.',
      ba_title:'Результат нашої роботи — подивіться різницю', ba_sub:'Нижче ви зможете додавати нові фото й відео без перебудови всієї сторінки.', ba1_t:'Те саме місце, той самий кадр', ba1_d:'Без трюків і без зміненого фону.', ba2_t:'Видимий ефект одразу', ba2_d:'Видаляємо навіть складні забруднення та неприємні запахи.', gallery_title:'Галерея фото до та після', video_title:'Відео з робіт', video_empty:'Сюди ви зможете пізніше додати власні відео.',
      reviews_title:'Відгуки клієнтів', reviews_text:'Короткі відгуки тих, хто замовляв чищення у Познані.',
      reviews_1_name:'Anna K.', reviews_1_date:'2 тижні тому', reviews_1_text:'Кутовий диван був сильно забруднений дітьми й котами. Після чищення як новий, неприємний запах зник. Усе пояснили перед початком — рекомендую.',
      reviews_2_name:'Piotr M.', reviews_2_date:'березень 2025', reviews_2_text:'Матрац ніби оновився, «старого» запаху вже немає. Пунктуальні, професійне обладнання, без хаосу в квартирі.',
      reviews_3_name:'Magdalena W.', reviews_3_date:'місяць тому', reviews_3_text:'Оббивка в авто — різниця велика. Зв’язок по телефону без проблем, приїхали в узгоджений час.',
      final_title:'Замовте хімчистку вже сьогодні', final_sub:'Швидкий прорахунок, зрозумілі умови та прямий контакт за номером +48 517 744 957.', final_call:'Подзвонити: +48 517 744 957', final_order:'Швидке замовлення',
      form_title:'Форма швидкого замовлення', form_sub:'Заповніть форму, і ми передзвонимо або відповімо якнайшвидше.', form_name:'Ім’я', form_phone:'Телефон', form_city:'Місто / район', form_service:'Послуга', form_message:'Повідомлення', form_submit:'Надіслати заявку', form_sending:'Надсилаємо...',
      service_1:'Диван / кутовий диван', service_2:'Матрац', service_3:'Авто', service_4:'Килим / покриття', service_5:'Інше', back_top:'Вгору сторінки', footer:'© 2026 ExpressClean Poznań'
    },
    ru: {
      quick_order:'Заказать сейчас', nav_label:'Навигация по сайту', nav_services:'Услуги', nav_prices:'Цены', nav_why:'Почему мы', nav_gallery:'Работы', nav_reviews:'Отзывы', nav_contact:'Контакт', topbarAlt:'Логотип Kärcher', eyebrow:'⭐ Профессиональная химчистка мебели в Познани',
      hero_title:'Химчистка мебели в Познани с выездом за 24 часа', hero_sub:'Удаляем пятна, запахи и пылевых клещей. Высыхание за 4–6 часов.',
      point1:'Гарантия результата — или бесплатно исправим', point2:'Используем сертифицированную химию Kärcher', point3:'Реальные фото до и после чистки', point4:'Быстрый расчет без скрытых доплат',
      cta_order:'Заказать химчистку', cta_price:'Посмотреть цены',
      services_title:'Наши услуги', services_sub:'Профессиональная чистка для дома, детей и автомобиля',
      srv1_t:'Диваны и угловые диваны', srv1_d:'Удаляем пятна, пыль и запахи с мягкой мебели.', srv2_t:'Матрасы', srv2_d:'Устраняем пылевых клещей и бактерии для более здорового сна.',
      srv3_t:'Автотекстиль', srv3_d:'Базовая, расширенная и комплексная чистка салона автомобиля.', srv4_t:'Ковры и покрытия', srv4_d:'Эффективная стирка и освежение поверхностей дома и в офисе.',
      srv5_t:'Детские вещи', srv5_d:'Игрушки, люльки и автокресла чистим безопасной химией.', srv6_t:'Удаление запахов', srv6_d:'Нейтрализация мочи животных, рвоты, сырости и дыма.',
      prices_title:'Цены на услуги', prices_sub:'Это ориентировочные цены. Точную стоимость вы получите до начала работы.', price_box1:'Мебель и домашние вещи',
      p1:'Стул', p2:'Пуф', p3:'Кресло', p4:'Диван-книжка', p5:'Угловой диван', p6:'Матрас', p7:'Плюшевые игрушки', p8:'Люлька детской коляски', p9:'Детское автокресло', p10:'Ковер', p11:'Покрытие',
      free_tag:'Нейтрализация неприятных запахов бесплатно для большого дивана или матраса', price_box2:'Чистка автомобиля', car1:'Базовая чистка текстиля (передние сиденья)', car2:'Расширенная чистка (сиденья и задний диван)', car3:'Комплексная чистка (сиденья, задний диван, боковины, пол, потолок, багажник)',
      price_note:'Итоговая цена зависит от степени загрязнения. Мы всегда согласовываем стоимость до начала работы.',
      why_title:'Почему клиенты выбирают нас', why_sub:'Быстро, эффективно и без риска', why1_t:'Быстрый выезд', why1_d:'Можем приехать даже в течение 24 часов.', why2_t:'Быстрое высыхание', why2_d:'Мебель готова к использованию через 4–6 часов.',
      badge:'Важное преимущество', why3_t:'Гарантия результата', why3_d:'Если результат не будет удовлетворительным — бесплатно исправим.', why4_t:'Безопасная химия', why4_d:'Безопасна для детей, животных и аллергиков.',
      ba_title:'Результат нашей работы — посмотрите разницу', ba_sub:'Ниже вы сможете добавлять новые фото и видео без перестройки всей страницы.', ba1_t:'То же место, тот же кадр', ba1_d:'Без трюков и без измененного фона.', ba2_t:'Видимый эффект сразу', ba2_d:'Удаляем даже сложные загрязнения и неприятные запахи.', gallery_title:'Галерея фото до и после', video_title:'Видео с работ', video_empty:'Сюда вы сможете позже добавить собственные видео.',
      reviews_title:'Отзывы клиентов', reviews_text:'Короткие отзывы тех, кто заказывал чистку в Познани.',
      reviews_1_name:'Anna K.', reviews_1_date:'2 недели назад', reviews_1_text:'Угловой диван был сильно загрязнён детьми и кошками. После чистки как новый, неприятный запах пропал. Всё объяснили заранее — рекомендую.',
      reviews_2_name:'Piotr M.', reviews_2_date:'март 2025', reviews_2_text:'Матрас как обновлённый, «старого» запаха больше нет. Пунктуальны, профессиональное оборудование, без хаоса в квартире.',
      reviews_3_name:'Magdalena W.', reviews_3_date:'месяц назад', reviews_3_text:'Обивка в машине — разница огромная. Связь по телефону без проблем, приехали в назначенное время.',
      final_title:'Закажите химчистку уже сегодня', final_sub:'Быстрый расчет, понятные условия и прямой контакт по номеру +48 517 744 957.', final_call:'Позвонить: +48 517 744 957', final_order:'Быстрый заказ',
      form_title:'Форма быстрого заказа', form_sub:'Заполните форму, и мы перезвоним или ответим как можно быстрее.', form_name:'Имя', form_phone:'Телефон', form_city:'Город / район', form_service:'Услуга', form_message:'Сообщение', form_submit:'Отправить заявку', form_sending:'Отправляем...',
      service_1:'Диван / угловой диван', service_2:'Матрас', service_3:'Авто', service_4:'Ковер / покрытие', service_5:'Другое', back_top:'Наверх страницы', footer:'© 2026 ExpressClean Poznań'
    }
  }
};
