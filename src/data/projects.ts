export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  githubUrl: string;
  technologies: string[];
}

export const projects: ProjectType[] = [
  {
    id: "recept-och-inköpslista",
    title: "Receptapp",
    shortDescription: "ReceptApp är en modern Windows-applikation utvecklad i C# med WPF och MVVM-designmönster. Programmet gör det möjligt för användare att hantera, organisera och visa recept på ett användarvänligt sätt.",    
    description: "(Genererad av ChatGPT) Tekniska höjdpunkter: MVVM-arkitektur: Implementerar god separering av logik och gränssnitt för ökad skalbarhet och testbarhet. Databindning & INotifyPropertyChanged: Dynamisk uppdatering av UI-komponenter genom databindning. Navigation & Sidhantering: Använder WPF Pages för att hantera olika vyer smidigt. Responsiv och dynamisk UI: Byggd med XAML för en modern och användarvänlig design. Asynkron bearbetning: Använder Dispatcher för att hantera UI-uppdateringar utan att blockera huvudtråden. Denna applikation visar min förmåga att utveckla fullständiga desktop-applikationer med C# och WPF samt att följa moderna designprinciper för en strukturerad och underhållbar kodbas.",
    thumbnail: "https://i.postimg.cc/NjWYDxrn/receptapp.png",
    videoUrl: "https://www.youtube.com/embed/aLEdNL1pAMo?si=7lznjLNTRunLgbH7",
    githubUrl: "https://github.com/Badwolfpup/ReceptApp",
    technologies: ["C#", "WPF"]
  },
  {
    id: "black-jack",
    title: "Black Jack",
    shortDescription: "Mitt första projekt. Black Jack är en Windows-applikation utvecklad i C# med Windows Forms. Programmet låter spelare spela Black Jack mot en datoriserad dealer i en grafisk miljö.",
    description: "(Genererad av ChatGPT) Tekniska höjdpunkter: - Objektorienterad design: Använder klasser för spelare, kortlek och spelhantering. - Grafisk UI-hantering: Windows Forms används för att rendera spelets visuella komponenter. - Händelsehantering: Implementerar klickhändelser och UI-uppdateringar i realtid. - Ljudintegration: Använder NAudio-biblioteket för att spela ljudeffekter. - Flerspelarstöd: Hanterar flera spelare genom dynamisk spelardata. Projektet visar min förmåga att utveckla spel och interaktiva Windows-applikationer med C# och Windows Forms.
",    
    thumbnail: "https://i.postimg.cc/gJKWYFB9/blackjack.png",
    videoUrl: "https://www.youtube.com/embed/Lv6fel7cu2A?si=YT9sp00mOtMgbKz9",
    githubUrl: "https://github.com/Badwolfpup/Black-Jack",
    technologies: ["C#", "Windows Forms"]
  },
  {
    id: "patiens",
    title: "Sjuans patiens",
    shortDescription: "En återskapelse av den klassiska patiensen Sjuan. Spelet är en webbaserad patiens-applikation utvecklad med HTML, CSS och JavaScript. Spelet låter användaren spela klassisk patiens direkt i webbläsaren med en interaktiv och responsiv design.
",
    description: "(Genererad av ChatGPT) Tekniska höjdpunkter: - DOM-manipulation: Använder JavaScript för att dynamiskt uppdatera spelets UI. - Händelsehantering: Implementerar drag-och-släpp-funktionalitet för kortflyttning. - Spellogik: Hanterar kortlekar, draghögar och vinstkontroller med strukturerad kod. - Responsiv design: Anpassad för olika skärmstorlekar genom flexibla CSS-stilar. Projektet demonstrerar min förmåga att utveckla interaktiva webbapplikationer med JavaScript och en genomtänkt UI-design.
",    
    thumbnail: "https://i.postimg.cc/YSY7sm6C/sjuan.png",
    videoUrl: "https://www.youtube.com/embed/GvN0AAWIesU?si=Mf12kSUoiFK8smEC",
    githubUrl: "https://github.com/Badwolfpup/Patiens",
    technologies: ["Javscript"]
  }
  ,
  {
    id: "yatzy",
    title: "Yatzy",
    shortDescription: "Yatzy är en Windows-applikation utvecklad i C# med WPF. Spelet låter användare spela en digital version av Yatzy med tärningskast, poängräkning och highscore-hantering.l",
    description: "(Genererad av ChatGPT) Tekniska höjdpunkter: - MVVM-arkitektur: Implementerar databindning och INotifyPropertyChanged för dynamiska UI-uppdateringar. - Tärningslogik: Hanterar tärningskast och visuella uppdateringar baserat på slumpmässiga värden. - Bildhantering: Laddar tärningsbilder dynamiskt med pack-URI i WPF. - Poängsystem: Implementerar logik för att räkna och spara highscore. - Responsiv design: Anpassad UI byggd med XAML för en modern och intuitiv användarupplevelse. Projektet visar min förmåga att utveckla spel och interaktiva desktop-applikationer med C# och WPF.
",
    thumbnail: "https://i.postimg.cc/pL9RKSy8/yatzy.png",
    videoUrl: "https://www.youtube.com/embed/VMDwmiBCCLU?si=CcDy8AAFhJW_zJf8",
    githubUrl: "https://github.com/Badwolfpup/Yatzy",
    technologies: ["C#", "WPF"]
  }
];
