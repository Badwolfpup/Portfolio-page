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
    shortDescription: "En desktopapp där du kan lägga in olika varor, skapa recept och inköpslistor",
    description: "Man kan lägga in matvaror och andra varor. Du anger visst näringsinnehåll och annan information, samt pris och storlek. Matvarorna kan du lägga till i recept för att beräkna kalorimängden. Du kan också skapa inköpslistor, antingen genom att lägga till hela receptet eller varje vara för sig.",    
    thumbnail: "https://i.postimg.cc/NjWYDxrn/receptapp.png",
    videoUrl: "https://www.youtube.com/embed/aLEdNL1pAMo?si=7lznjLNTRunLgbH7",
    githubUrl: "https://github.com/Badwolfpup/ReceptApp",
    technologies: ["C#", "WPF"]
  },
  {
    id: "black-jack",
    title: "Black Jack",
    shortDescription: "Ett fullt fungerande Black Jack-spel, med stöd för upp till 6 datorspelare",
    description: "Mitt första större projekt. Det är ett fullt fungerande Black Jack-spel. Det är skrivet i C# och använder Windows Forms. Datorspelarna har en enkel algoritm som styr hur de spelar. ",    
    thumbnail: "https://i.postimg.cc/gJKWYFB9/blackjack.png",
    videoUrl: "https://www.youtube.com/embed/Lv6fel7cu2A?si=YT9sp00mOtMgbKz9",
    githubUrl: "https://github.com/Badwolfpup/Black-Jack",
    technologies: ["C#", "Windows Forms"]
  },
  {
    id: "patiens",
    title: "Sjuans patiens",
    shortDescription: "En återskapelse av den klassiska patiensen Sjuan",
    description: "Ett patiensspel skriver i javascript. Jag ville testa att skriv ett fullödigt program i ett annat programmeringsspråk. Du har möjlighet att välja om du själv ska flytta korten eller om de ska flyttas automatiskt. Du kan också välja att låta datorn spela åt dig",    
    thumbnail: "https://i.postimg.cc/YSY7sm6C/sjuan.png",
    videoUrl: "https://www.youtube.com/embed/GvN0AAWIesU?si=Mf12kSUoiFK8smEC",
    githubUrl: "https://github.com/Badwolfpup/Patiens",
    technologies: ["Javscript"]
  }
  ,
  {
    id: "yatzy",
    title: "Yatzy",
    shortDescription: "Ett enkelt Yatsyspel",
    description: "Ett enkelt yatzyspel där du använder musknapparna för att välja vad du vill ge poäng till eller för att stryka.",
    thumbnail: "https://i.postimg.cc/pL9RKSy8/yatzy.png",
    videoUrl: "https://www.youtube.com/embed/VMDwmiBCCLU?si=CcDy8AAFhJW_zJf8",
    githubUrl: "https://github.com/Badwolfpup/Yatzy",
    technologies: ["C#", "WPF"]
  }
];
