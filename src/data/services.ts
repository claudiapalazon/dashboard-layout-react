export interface ServiceType {
  title: string;
  price: string;
  duration: number;
}

export interface ServiceDetail {
  title: string;
  icon: string;
  types: ServiceType[];
}

export interface Service {
  title: string;
  icon: string;
  services: ServiceDetail[];
}

export const servicesData: Service[] = [
  {
    title: "Montaje",
    icon: "handyman",
    services: [
      {
        title: "Silla",
        icon: "chair",
        types: [
          {
            title: "De escritorio",
            price: "29,3€",
            duration: 55,
          },
          {
            title: "De oficina",
            price: "20€",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    title: "Colgado",
    icon: "hung",
    services: [
      {
        title: "Estantería",
        icon: "chair",
        types: [
          {
            title: "De pared",
            price: "35€",
            duration: 30,
          },
        ],
      },
    ],
  },
  {
    title: "Instalación",
    icon: "instalation",
    services: [
      {
        title: "Lavadora",
        icon: "chair",
        types: [
          {
            title: "Electrodoméstico",
            price: "50€",
            duration: 45,
          },
        ],
      },
    ],
  },
  {
    title: "Pequeños arreglos",
    icon: "smallfixes",
    services: [
      {
        title: "Electrodoméstico",
        icon: "chair",
        types: [
          {
            title: "Aspiradora",
            price: "15€",
            duration: 20,
          },
        ],
      },
    ],
  },
];
