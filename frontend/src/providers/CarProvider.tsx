/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { ICar, IDefaultProviderProps } from '../interfaces';
import { api } from '../services/api';

const carsMock: ICar[] = [
  {
    id: 1,
    brand: 'Citroen',
    model: 'C3',
    description:
      'O Citroën C3 é um carro compacto e elegante que se destaca pelo seu design moderno e distintivo. Com linhas suaves e arrojadas, o C3 apresenta uma frente característica da marca, com os emblemáticos faróis divididos em duas partes. Seu interior é espaçoso e confortável, com materiais de qualidade e detalhes cuidadosamente projetados. Equipado com tecnologias avançadas, o C3 oferece uma experiência de condução conectada, incluindo um sistema de infotainment intuitivo e recursos de segurança como assistência à frenagem de emergência e alerta de saída de faixa. Com uma seleção de motores eficientes em termos de consumo de combustível, o Citroën C3 proporciona um equilíbrio entre estilo, praticidade e desempenho, tornando-o uma opção atraente para aqueles que buscam um carro urbano com personalidade.',
    color: 'Preto',
    year: 2010,
    fuel_type: 'Flex',
    kilometrage: 83000,
    price: '24000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    description:
      'O Honda Civic é um sedan compacto conhecido por sua combinação de confiabilidade, eficiência e estilo. Com um design aerodinâmico e linhas elegantes, o Civic possui uma presença marcante nas estradas. Seu interior bem projetado oferece conforto e espaço para os ocupantes, juntamente com tecnologias modernas, como um sistema de infotainment com tela sensível ao toque e recursos de segurança avançados, incluindo assistência de frenagem de emergência e sistemas de alerta de colisão. Com opções de motores eficientes e desempenho equilibrado, o Honda Civic é uma escolha popular tanto para motoristas urbanos quanto para aqueles que buscam conforto em viagens mais longas. Sua reputação de durabilidade e valor de revenda também contribui para sua popularidade entre os consumidores.',
    color: 'Prata',
    year: 2011,
    fuel_type: 'Flex',
    kilometrage: 110000,
    price: '44000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Fiesta',
    description:
      'O Ford Fiesta é um carro compacto conhecido por sua agilidade, economia de combustível e versatilidade. Com um design dinâmico e contemporâneo, o Fiesta apresenta linhas aerodinâmicas que refletem sua natureza ágil. Seu interior oferece um espaço bem projetado, com uma variedade de recursos de tecnologia, incluindo um sistema de entretenimento moderno e opções de conectividade. Disponível em várias versões e motorizações, o Fiesta oferece uma experiência de condução envolvente e eficiente, ideal para ambientes urbanos e também para viagens mais longas. Com uma reputação sólida de confiabilidade e um histórico de sucesso global, o Ford Fiesta é uma escolha popular entre os consumidores que procuram um carro compacto que combine desempenho, economia e estilo.',
    color: 'Vermelho',
    year: 2008,
    fuel_type: 'Gasoline',
    kilometrage: 98000,
    price: '30000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 4,
    brand: 'Jeep',
    model: 'Compass',
    description:
      'O Jeep Compass é um SUV compacto que combina estilo robusto com conforto moderno e capacidades off-road. Com um design inspirado nos icônicos traços da marca Jeep, o Compass apresenta uma frente imponente e linhas musculosas. Seu interior oferece espaço para passageiros e carga, além de tecnologias avançadas, como um sistema de infotainment intuitivo e recursos de segurança abrangentes, incluindo assistência de frenagem de emergência e sistemas de assistência à condução. O Compass é reconhecido por suas habilidades off-road, graças aos sistemas de tração nas quatro rodas disponíveis e às características projetadas para lidar com terrenos variados. Com uma variedade de opções de motorização, incluindo versões mais eficientes em termos de combustível e outras focadas em desempenho, o Jeep Compass oferece versatilidade e uma experiência de condução atraente tanto na cidade quanto fora dela.',
    color: 'Branco',
    year: 2018,
    fuel_type: 'Flex',
    kilometrage: 75000,
    price: '130000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 5,
    brand: 'Volkswagem',
    model: 'Gol',
    description:
      'O Volkswagen Gol é um carro compacto e icônico que tem uma história longa e marcante no mercado automobilístico. Com um design simples e funcional, o Gol é conhecido por sua confiabilidade e facilidade de manutenção. Ao longo dos anos, ele passou por várias gerações e atualizações, sempre mantendo sua popularidade. Seu interior oferece espaço suficiente para acomodar os passageiros de forma confortável e eficiente, enquanto sua dirigibilidade e manobrabilidade são características destacadas, tornando-o uma escolha popular para ambientes urbanos. Embora não seja recheado de tecnologias avançadas, o Gol é conhecido por sua durabilidade, economia de combustível e valor de revenda. Com opções de motorização para diferentes necessidades e preferências, o Volkswagen Gol continua sendo uma opção acessível e confiável para muitos motoristas.',
    color: 'Prata',
    year: 2015,
    fuel_type: 'Flex',
    kilometrage: 150000,
    price: '20000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 6,
    brand: 'Mercedes Benz',
    model: 'Gla',
    description:
      'O Mercedes-Benz GLA é um SUV compacto de luxo que irradia elegância e sofisticação. Seu design exterior apresenta linhas modernas e aerodinâmicas, enquanto o interior oferece um ambiente refinado, repleto de materiais de alta qualidade e tecnologia de última geração. Equipado com uma variedade de recursos avançados, desde sistemas de segurança inteligentes até um sistema de infotainment de ponta, o GLA proporciona uma experiência de condução conectada e segura. Com opções de motorização eficientes e desempenho excepcional, o GLA é uma escolha que une luxo, versatilidade e inovação para aqueles que buscam o equilíbrio perfeito entre estilo e funcionalidade no mundo dos SUVs de luxo.',
    color: 'Branco',
    year: 2020,
    fuel_type: 'Flex',
    kilometrage: 12000,
    price: '220000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 7,
    brand: 'Fiat',
    model: 'Uno',
    description:
      'O Fiat Uno é um carro compacto e icônico que conquistou popularidade por sua simplicidade, eficiência e acessibilidade. Com um design simples e funcional, o Uno é conhecido por ser um veículo prático e de fácil manutenção. Seu interior oferece espaço suficiente para acomodar os passageiros com conforto, enquanto sua dirigibilidade ágil o torna ideal para navegar pelas ruas urbanas. Embora possa carecer das tecnologias mais avançadas, o Uno é reconhecido por sua durabilidade, economia de combustível e facilidade de direção. Ao longo dos anos, o Fiat Uno se estabeleceu como um carro de referência para quem procura um veículo acessível e confiável para atender às necessidades básicas de mobilidade.',
    color: 'Verde',
    year: 2004,
    fuel_type: 'Flex',
    kilometrage: 110000,
    price: '13000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 8,
    brand: 'Nissan',
    model: 'Frontier',
    description:
      'A Nissan Frontier é uma picape robusta e versátil, projetada para lidar tanto com as demandas do trabalho quanto com as aventuras off-road. Com um design imponente, a Frontier apresenta linhas marcantes e uma presença dominante nas estradas. Seu interior oferece espaço confortável para os ocupantes e uma variedade de recursos tecnológicos, incluindo um sistema de infotainment moderno e opções de conectividade avançadas. O destaque da Frontier está em suas capacidades de carga e reboque, tornando-a uma escolha popular para aqueles que precisam de um veículo robusto para lidar com tarefas pesadas. Além disso, sua capacidade de tração nas quatro rodas e recursos off-road a tornam apta para enfrentar terrenos acidentados. Com uma seleção de opções de motorização e níveis de acabamento, a Nissan Frontier oferece uma combinação de força, desempenho e funcionalidade, tornando-se uma escolha atraente para os amantes de picapes e aventureiros.',
    color: 'Preto',
    year: 2016,
    fuel_type: 'Flex',
    kilometrage: 63000,
    price: '130000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  },
  {
    id: 9,
    brand: 'Toyota',
    model: 'Hilux',
    description:
      'A Toyota Hilux é uma picape lendária, reconhecida por sua durabilidade, confiabilidade e capacidade em uma ampla gama de condições. Com um design robusto e resistente, a Hilux apresenta uma presença dominante e características de estilo que refletem sua natureza robusta. Seu interior oferece conforto e funcionalidade, com espaço para passageiros e uma seleção de recursos de tecnologia, incluindo sistemas de entretenimento e conectividade. A Hilux é conhecida por suas impressionantes capacidades de carga e reboque, tornando-a uma escolha popular para trabalhos pesados e aventuras off-road. Equipada com opções de motorização potentes e eficientes, juntamente com tração nas quatro rodas e recursos específicos para enfrentar terrenos difíceis, a Toyota Hilux é uma escolha confiável e versátil para aqueles que precisam de uma picape resistente que esteja à altura de qualquer desafio.',
    color: 'Prata',
    year: 2018,
    fuel_type: 'Flex',
    kilometrage: 46000,
    price: '180000',
    published: true,
    good_deal: false,
    created_at: '2023-08-10'
  }
];

interface ICarContextValues {
  allCars: ICar[];
  carBrands: string[];
  carModels: string[];
  carColors: string[];
  carYears: string[];
  carFuelTypes: string[];
  CarMinKm: number;
  CarMaxKm: number;
  CarMinPrice: number;
  CarMaxPrice: number;
}

export const CarContext = createContext({} as ICarContextValues);

export const CarProvider = ({ children }: IDefaultProviderProps) => {
  const [allCars, setAllCars] = useState([] as ICar[]);
  const [carBrands, setCarBrands] = useState([] as string[]);
  const [carModels, setCarModels] = useState([] as string[]);
  const [carColors, setCarColors] = useState([] as string[]);
  const [carYears, setCarYears] = useState([] as string[]);
  const [carFuelTypes, setCarFuelTypes] = useState([] as string[]);
  const [CarMinKm, setCarMinKm] = useState(0);
  const [CarMaxKm, setCarMaxKm] = useState(0);
  const [CarMinPrice, setCarMinPrice] = useState(0);
  const [CarMaxPrice, setCarMaxPrice] = useState(0);

  const findValues = (attrName: string): string[] => {
    const values: string[] = allCars.map((car) => String(car[attrName]));
    const uniqueValues = [...new Set(values)];
    uniqueValues.sort();

    console.log(uniqueValues);

    return uniqueValues;
  };

  useEffect(() => {
    const getCars = async () => {
      try {
        const cars = await api.get<ICar[]>('/cars');
        setAllCars(cars.data);
      } catch (error) {
        console.log(error);
      }
    };
    // setAllCars(carsMock);
    getCars();
  }, []);

  useEffect(() => {
    setCarBrands(findValues('brand'));
    setCarModels(findValues('model'));
    setCarColors(findValues('color'));
    setCarYears(findValues('year'));
    setCarFuelTypes(findValues('fuel_type'));
    setCarMinKm(parseInt(findValues('kilometrage')[0]));
    setCarMaxKm(
      parseInt(findValues('kilometrage')[findValues('kilometrage').length - 1])
    );
    setCarMinPrice(parseInt(findValues('price')[0]));
    setCarMaxPrice(
      parseInt(findValues('price')[findValues('price').length - 1])
    );
  }, [allCars]);

  return (
    <CarContext.Provider
      value={{
        allCars,
        carBrands,
        carModels,
        carColors,
        carYears,
        carFuelTypes,
        CarMinKm,
        CarMaxKm,
        CarMinPrice,
        CarMaxPrice
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
