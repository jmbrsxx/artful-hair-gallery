import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Scissors, Sparkles, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import productsImg from "@/assets/products.jpg";
import interiorImg from "@/assets/interior.jpg";

const services = [
  { icon: Scissors, title: "Cortes", desc: "Cortes femininos e masculinos com profissionais especializados em todos os tipos de cabelo." },
  { icon: Sparkles, title: "Coloração", desc: "Mechas, luzes, balayage e coloração completa com produtos de alta qualidade." },
  { icon: Heart, title: "Cabelos Cacheados", desc: "Especialistas em cortes e tratamentos para cabelos cacheados e crespos." },
  { icon: Award, title: "Tratamentos", desc: "Hidratação, reconstrução e tratamentos premium para cabelos saudáveis." },
];

const reviews = [
  {
    name: "Rayane Baptista da Silva",
    text: "Excelente atendimento! Já havia cortado meu cabelo com o Joá duas vezes, dessa vez levei minhas filhas. Elas saíram de lá extremamente felizes com o corte.",
    when: "11 meses atrás",
  },
  {
    name: "Aline Silva",
    text: "Profissionais com muita experiência. Super recomendo!!!",
    when: "1 mês atrás",
  },
  {
    name: "Fernanda Lopes",
    text: "Corto meu cabelo todos os meses com o Erasmo. Difícil encontrar um profissional que acerte o corte de cabelos cacheados. O salão tem ótima localização e sempre tem um cafézinho disponível.",
    when: "2 anos atrás",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="font-serif text-xl md:text-2xl tracking-widest">
            <span className="text-gradient-gold">ADRIANO</span>
            <span className="text-foreground/80 ml-2 text-sm">FASHION HAIR</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#sobre" className="hover:text-primary transition-smooth">Sobre</a>
            <a href="#servicos" className="hover:text-primary transition-smooth">Serviços</a>
            <a href="#avaliacoes" className="hover:text-primary transition-smooth">Avaliações</a>
            <a href="#contato" className="hover:text-primary transition-smooth">Contato</a>
          </div>
          <Button variant="default" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold border-0">
            Agendar
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Interior luxuoso do salão Adriano Fashion Hair"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative z-10 container text-center px-4 pt-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full gold-border bg-background/40 backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-foreground/90">4,8 · 272 avaliações no Google</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Beleza, estilo e <br />
            <span className="text-gradient-gold italic">sofisticação</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            No coração do Centro Histórico de Porto Alegre, um salão onde tradição e expertise se encontram para revelar a sua melhor versão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold border-0 px-8">
              Agendar Horário
            </Button>
            <Button size="lg" variant="outline" className="gold-border bg-transparent hover:bg-primary/10 px-8">
              Nossos Serviços
            </Button>
          </div>
        </div>
      </header>

      {/* Sobre */}
      <section id="sobre" className="py-24 container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Nossa História</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Um <span className="text-gradient-gold italic">refúgio</span> de elegância no centro de Porto Alegre
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Adriano Fashion Hair é mais do que um salão — é uma experiência. Localizado no histórico Edifício Centro Profissional Alberto Bins, recebemos cada cliente com cuidado, expertise e o carinho que faz toda a diferença.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com uma equipe de profissionais reconhecidos como Joá, Erasmo e Mari, somos especialistas em fazer você sair se sentindo o máximo.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Sparkles className="w-4 h-4 text-primary" />
              Empresa de empreendedoras
            </div>
          </div>
          <div className="relative">
            <img
              src={interiorImg}
              alt="Interior do salão"
              className="w-full rounded-sm shadow-elegant"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-gold text-primary-foreground p-6 rounded-sm shadow-gold hidden md:block">
              <div className="font-serif text-4xl">4,8</div>
              <div className="text-xs tracking-widest uppercase">272 Avaliações</div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24" style={{ background: "var(--gradient-dark)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">O que oferecemos</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              Nossos <span className="text-gradient-gold italic">Serviços</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="bg-card gold-border p-8 transition-smooth hover:shadow-gold hover:-translate-y-2 group">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-sm group">
            <img src={serviceHair} alt="Atendimento profissional" className="w-full h-[500px] object-cover transition-smooth group-hover:scale-105" loading="lazy" width={1024} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-serif text-3xl mb-2 text-gradient-gold">Expertise & Carinho</h3>
              <p className="text-foreground/80">Profissionais com formação e experiência reconhecidas pelos clientes.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-sm group">
            <img src={productsImg} alt="Produtos premium" className="w-full h-[500px] object-cover transition-smooth group-hover:scale-105" loading="lazy" width={1024} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-serif text-3xl mb-2 text-gradient-gold">Produtos Premium</h3>
              <p className="text-foreground/80">Lojinha com produtos selecionados para você levar para casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="py-24" style={{ background: "var(--gradient-dark)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">Quem nos visita</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
              O que dizem nossas <span className="text-gradient-gold italic">clientes</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-muted-foreground">4,8 de 5 · 272 avaliações</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="bg-card gold-border p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">"{r.text}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-serif text-lg text-gradient-gold">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.when}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Visite-nos</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Venha nos <span className="text-gradient-gold italic">conhecer</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-card gold-border p-8 text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-2">Endereço</h3>
            <p className="text-muted-foreground text-sm">
              Praça Rui Barbosa, 210<br />Centro Histórico<br />Porto Alegre - RS
            </p>
          </Card>
          <Card className="bg-card gold-border p-8 text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-2">Telefone</h3>
            <p className="text-muted-foreground text-sm mb-2">(51) 3026-4101</p>
            <a href="tel:+555130264101" className="text-primary text-sm hover:underline">Ligar agora</a>
          </Card>
          <Card className="bg-card gold-border p-8 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-2">Horário</h3>
            <p className="text-muted-foreground text-sm">
              Segunda a Sábado<br />9:00 - 19:00
            </p>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold border-0 px-12">
            Agendar pelo Avec
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container text-center">
          <div className="font-serif text-2xl tracking-widest mb-2">
            <span className="text-gradient-gold">ADRIANO</span>
            <span className="text-foreground/70 ml-2 text-sm">FASHION HAIR</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adriano Fashion Hair · Salão de Beleza em Porto Alegre
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
