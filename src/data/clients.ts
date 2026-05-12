export interface Client {
  id: string;
  name: string;
  initials: string;
  color: string;
  logo?: string; // ruta local (/img/clientes/nombre.png) o URL externa
}

export const clients: Client[] = [
  { id: "c01", name: "Prefeitura Municipal",  initials: "PM",  color: "#2563eb" /*, logo: "/img/clientes/prefeitura.png" */ },
  { id: "c02", name: "Colégio São Paulo",     initials: "CSP", color: "#16a34a" /*, logo: "/img/clientes/colegio-sp.png" */ },
  { id: "c03", name: "Metalúrgica Forte",     initials: "MF",  color: "#dc2626" /*, logo: "/img/clientes/metalurgica.png" */ },
  { id: "c04", name: "Hospital Central",      initials: "HC",  color: "#0891b2" /*, logo: "/img/clientes/hospital.png" */ },
  { id: "c05", name: "Construtora Ábaco",     initials: "CA",  color: "#9333ea" /*, logo: "/img/clientes/abaco.png" */ },
  { id: "c06", name: "Transportes Unidos",    initials: "TU",  color: "#ea580c" /*, logo: "/img/clientes/transportes.png" */ },
  { id: "c07", name: "Escola Estadual Nova",  initials: "EEN", color: "#0d9488" /*, logo: "/img/clientes/escola.png" */ },
  { id: "c08", name: "Segurança Total",       initials: "ST",  color: "#b45309" /*, logo: "/img/clientes/seguranca.png" */ },
  { id: "c09", name: "Indústria Alfa",        initials: "IA",  color: "#be185d" /*, logo: "/img/clientes/alfa.png" */ },
  { id: "c10", name: "Grupo Comercial Norte", initials: "GCN", color: "#4338ca" /*, logo: "/img/clientes/gcn.png" */ },
  { id: "c11", name: "Limpeza Express",       initials: "LE",  color: "#15803d" /*, logo: "/img/clientes/limpeza.png" */ },
  { id: "c12", name: "Vigilância Max",        initials: "VM",  color: "#b91c1c" /*, logo: "/img/clientes/vigilancia.png" */ },
];
