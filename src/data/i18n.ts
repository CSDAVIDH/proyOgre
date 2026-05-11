import type { Language } from "@/context/language-context";
import type { ProductCategory } from "@/types/product";

type HeaderTexts = {
  navPortfolio: string;
  navCompany: string;
  navContact: string;
  languageLabel: string;
};

type HeroTexts = {
  title: string;
  subtitle: string;
  ctaPortfolio: string;
  ctaContact: string;
};

type PortfolioTexts = {
  sectionTitle: string;
  sectionDescription: string;
  requestQuote: string;
};

type CompanyTexts = {
  shortDescription: string;
  lineSocialTitle: string;
  lineSocialBody: string;
  lineOperationalTitle: string;
  lineOperationalBody: string;
  lineSecurityTitle: string;
  lineSecurityBody: string;
  address: string;
  phone: string;
  website: string;
  location: string;
  schedule: string;
};

type CommonTexts = {
  categories: Record<ProductCategory | "todos", string>;
  categoryBadge: Record<ProductCategory, string>;
};

export interface SiteTranslations {
  header: HeaderTexts;
  hero: HeroTexts;
  portfolio: PortfolioTexts;
  company: CompanyTexts;
  common: CommonTexts;
}

export const translations: Record<Language, SiteTranslations> = {
  pt: {
    header: {
      navPortfolio: "Portfólio",
      navCompany: "Empresa",
      navContact: "Contato",
      languageLabel: "Idioma",
    },
    hero: {
      title: "Uniformes com força, identidade e desempenho",
      subtitle:
        "Soluções têxteis profissionais para escolas, indústria, empresas e esporte com padrão Ogre de qualidade.",
      ctaPortfolio: "Ver portfólio",
      ctaContact: "Falar com a Ogre",
    },
    portfolio: {
      sectionTitle: "Portfólio de Uniformes",
      sectionDescription:
        "Filtre por segmento e conheça peças desenvolvidas para resistência, conforto e presença profissional.",
      requestQuote: "Solicitar cotação",
    },
    company: {
      shortDescription:
        "Na Ogre Uniformes, a uniformização fortalece a primeira impressão, valoriza a marca e transmite profissionalismo em cada atendimento. Trabalhamos com tecidos de primeira linha, equipe qualificada, maquinário próprio e tecnologia para entregar conforto, durabilidade e identidade visual. Atendemos indústria, comércio, construção civil, setor público e serviços terceirizados, com soluções para limpeza, manutenção, segurança, vigilância e área hospitalar.",
      lineSocialTitle: "Linha social:",
      lineSocialBody:
        "blazer, camisa, calça, saia, vestidos e acessórios corporativos.",
      lineOperationalTitle: "Linha operacional:",
      lineOperationalBody:
        "polo, jalecos e uniformes de uso diário com foco em resistência.",
      lineSecurityTitle: "Linha segurança:",
      lineSecurityBody:
        "fardas, jaquetas e conjuntos completos para equipes técnicas.",
      address: "Endereço",
      phone: "Telefone",
      website: "Site",
      location: "Localização",
      schedule: "Horário referencial",
    },
    common: {
      categories: {
        todos: "Todos",
        escolares: "🏫 Escolares / Educativos",
        industriales: "🏭 Industriais / Trabalho",
        corporativos: "🏢 Corporativos / Empresariais",
        deportivos: "⚽ Esportivos",
      },
      categoryBadge: {
        escolares: "Escolar / Educativo",
        industriales: "Industrial / Trabalho",
        corporativos: "Corporativo / Empresarial",
        deportivos: "Esportivo",
      },
    },
  },
  es: {
    header: {
      navPortfolio: "Portafolio",
      navCompany: "Empresa",
      navContact: "Contacto",
      languageLabel: "Idioma",
    },
    hero: {
      title: "Uniformes con fuerza, identidad y rendimiento",
      subtitle:
        "Soluciones textiles profesionales para escuelas, industria, empresas y deporte con estándar Ogre de calidad.",
      ctaPortfolio: "Ver portafolio",
      ctaContact: "Hablar con Ogre",
    },
    portfolio: {
      sectionTitle: "Portafolio de Uniformes",
      sectionDescription:
        "Filtra por segmento y conoce prendas diseñadas para resistencia, confort y presencia profesional.",
      requestQuote: "Solicitar cotización",
    },
    company: {
      shortDescription:
        "En Ogre Uniformes, la uniformización fortalece la primera impresión, valoriza la marca y transmite profesionalismo en cada atención. Trabajamos con telas de primera línea, equipo calificado, maquinaria propia y tecnología para ofrecer confort, durabilidad e identidad visual. Atendemos industria, comercio, construcción civil, sector público y servicios tercerizados, con soluciones para limpieza, mantenimiento, seguridad, vigilancia y área hospitalaria.",
      lineSocialTitle: "Línea social:",
      lineSocialBody:
        "blazer, camisa, pantalón, falda, vestidos y accesorios corporativos.",
      lineOperationalTitle: "Línea operacional:",
      lineOperationalBody:
        "polo, batas y uniformes de uso diario con foco en resistencia.",
      lineSecurityTitle: "Línea seguridad:",
      lineSecurityBody:
        "uniformes, chaquetas y conjuntos completos para equipos técnicos.",
      address: "Dirección",
      phone: "Teléfono",
      website: "Sitio web",
      location: "Ubicación",
      schedule: "Horario referencial",
    },
    common: {
      categories: {
        todos: "Todos",
        escolares: "🏫 Escolares / Educativos",
        industriales: "🏭 Industriales / Trabajo",
        corporativos: "🏢 Corporativos / Empresariales",
        deportivos: "⚽ Deportivos",
      },
      categoryBadge: {
        escolares: "Escolar / Educativo",
        industriales: "Industrial / Trabajo",
        corporativos: "Corporativo / Empresarial",
        deportivos: "Deportivo",
      },
    },
  },
  en: {
    header: {
      navPortfolio: "Portfolio",
      navCompany: "Company",
      navContact: "Contact",
      languageLabel: "Language",
    },
    hero: {
      title: "Uniforms with strength, identity and performance",
      subtitle:
        "Professional textile solutions for schools, industry, businesses and sports with Ogre quality standards.",
      ctaPortfolio: "View portfolio",
      ctaContact: "Contact Ogre",
    },
    portfolio: {
      sectionTitle: "Uniform Portfolio",
      sectionDescription:
        "Filter by segment and explore garments built for durability, comfort and professional presence.",
      requestQuote: "Request quote",
    },
    company: {
      shortDescription:
        "At Ogre Uniformes, uniforms strengthen first impressions, elevate brand value and communicate professionalism in every interaction. We work with premium fabrics, skilled professionals, in-house machinery and technology to deliver comfort, durability and visual identity. We serve industry, retail, construction, public institutions and outsourced services, with solutions for cleaning, maintenance, security, surveillance and healthcare.",
      lineSocialTitle: "Social line:",
      lineSocialBody:
        "blazers, shirts, trousers, skirts, dresses and corporate accessories.",
      lineOperationalTitle: "Operational line:",
      lineOperationalBody:
        "polos, coats and daily-use uniforms focused on durability.",
      lineSecurityTitle: "Security line:",
      lineSecurityBody:
        "duty uniforms, jackets and complete sets for technical teams.",
      address: "Address",
      phone: "Phone",
      website: "Website",
      location: "Location",
      schedule: "Reference hours",
    },
    common: {
      categories: {
        todos: "All",
        escolares: "🏫 School / Educational",
        industriales: "🏭 Industrial / Work",
        corporativos: "🏢 Corporate / Business",
        deportivos: "⚽ Sports",
      },
      categoryBadge: {
        escolares: "School / Educational",
        industriales: "Industrial / Work",
        corporativos: "Corporate / Business",
        deportivos: "Sports",
      },
    },
  },
};
