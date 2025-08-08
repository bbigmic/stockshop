# Stocki - Platforma E-commerce dla Palet Zabawek

Nowoczesna platforma e-commerce do sprzedaży stocków magazynowych w paletach z zabawkami. Zbudowana z wykorzystaniem najnowszych technologii i najlepszych praktyk UX/UI z 2025 roku.

## 🚀 Funkcjonalności

### Strona główna
- **Hero Section** z call-to-action
- **Kategorie produktów** z ikonami i licznikami
- **Polecane produkty** z ocenami i recenzjami
- **Sekcja korzyści** z ikonami i opisami
- **Responsywny design** dla wszystkich urządzeń

### Panel Administratora
- **Dashboard** z statystykami i wykresami
- **Zarządzanie produktami** - dodawanie, edycja, usuwanie
- **Zarządzanie użytkownikami** - lista, role, statusy
- **Zarządzanie zamówieniami** - statusy, śledzenie, akcje
- **Filtry i wyszukiwanie** w każdej sekcji

### Technologie
- **Next.js 15** z App Router
- **TypeScript** dla type safety
- **Tailwind CSS** z custom design system
- **Prisma ORM** z SQLite
- **NextAuth.js** dla autoryzacji
- **Framer Motion** dla animacji
- **Lucide React** dla ikon
- **React Hook Form** z Zod validation

## 🛠️ Instalacja

### Wymagania
- Node.js 18+ 
- npm lub yarn

### Krok 1: Klonowanie repozytorium
```bash
git clone <repository-url>
cd stocki
```

### Krok 2: Instalacja zależności
```bash
npm install
```

### Krok 3: Konfiguracja środowiska
Skopiuj plik `.env.local` i uzupełnij zmienne:
```bash
cp .env.local.example .env.local
```

Edytuj `.env.local`:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

### Krok 4: Inicjalizacja bazy danych
```bash
npx prisma generate
npx prisma db push
```

### Krok 5: Uruchomienie aplikacji
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: http://localhost:3000

## 📁 Struktura projektu

```
stocki/
├── app/                    # Next.js App Router
│   ├── admin/             # Panel administratora
│   │   ├── layout.tsx     # Layout admina
│   │   ├── page.tsx       # Dashboard
│   │   ├── products/      # Zarządzanie produktami
│   │   ├── users/         # Zarządzanie użytkownikami
│   │   └── orders/        # Zarządzanie zamówieniami
│   ├── globals.css        # Globalne style
│   ├── layout.tsx         # Główny layout
│   └── page.tsx           # Strona główna
├── components/            # Komponenty React
│   ├── ui/               # Komponenty UI
│   │   ├── Header.tsx    # Nagłówek
│   │   └── Footer.tsx    # Stopka
│   └── admin/            # Komponenty admina
│       └── Sidebar.tsx   # Boczne menu
├── prisma/               # Schemat bazy danych
│   └── schema.prisma     # Definicje modeli
├── lib/                  # Biblioteki i utilities
├── types/                # Definicje TypeScript
├── public/               # Pliki statyczne
└── package.json          # Zależności
```

## 🎨 Design System

### Kolory
- **Primary**: Niebieski gradient (#0ea5e9 → #d946ef)
- **Secondary**: Fioletowy gradient
- **Success**: Zielony (#10b981)
- **Warning**: Żółty (#f59e0b)
- **Error**: Czerwony (#ef4444)

### Komponenty
- **Cards**: Zaokrąglone z cieniem i hover efektami
- **Buttons**: Gradient primary, secondary z border
- **Inputs**: Focus ring z primary color
- **Tables**: Responsive z hover states

### Animacje
- **Fade In**: Płynne pojawianie się elementów
- **Slide Up**: Animacja od dołu
- **Hover Effects**: Scale i shadow transitions
- **Loading States**: Skeleton loaders

## 🔧 Skrypty

```bash
npm run dev          # Uruchomienie w trybie development
npm run build        # Build produkcyjny
npm run start        # Uruchomienie produkcyjne
npm run lint         # Sprawdzenie kodu
npm run db:generate  # Generowanie Prisma Client
npm run db:push      # Synchronizacja bazy danych
npm run db:studio    # Prisma Studio (GUI dla bazy)
```

## 📊 Baza danych

### Modele
- **User**: Użytkownicy z rolami (USER/ADMIN)
- **Product**: Produkty z kategoriami i stanem magazynowym
- **Order**: Zamówienia z statusami
- **OrderItem**: Pozycje w zamówieniach

### Relacje
- User → Order (1:N)
- Product → OrderItem (1:N)
- Order → OrderItem (1:N)

## 🚀 Deployment

### Vercel (Zalecane)
1. Połącz repozytorium z Vercel
2. Skonfiguruj zmienne środowiskowe
3. Deploy automatyczny przy push

### Inne platformy
- **Netlify**: Wymaga build command
- **Railway**: Obsługuje Prisma
- **DigitalOcean**: App Platform

## 🔒 Bezpieczeństwo

- **NextAuth.js** dla autoryzacji
- **bcryptjs** dla hashowania haseł
- **Zod** dla walidacji danych
- **CORS** protection
- **Rate limiting** (do implementacji)

## 📈 Monitoring

- **Error tracking**: Sentry (do implementacji)
- **Analytics**: Google Analytics (do implementacji)
- **Performance**: Core Web Vitals monitoring

## 🤝 Contributing

1. Fork repozytorium
2. Utwórz feature branch
3. Commit zmiany
4. Push do branch
5. Otwórz Pull Request

## 📝 License

MIT License - zobacz plik LICENSE dla szczegółów.

## 🆘 Support

- **Email**: support@stocki.pl
- **Documentation**: /docs
- **Issues**: GitHub Issues

---

**Stocki** - Najlepsze palety zabawek w Polsce! 🎯 