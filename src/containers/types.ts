export type paypalOptions = {
  clientId: string;
  intent: 'capture' | 'authorize';
  currency: string;
};

export type buttonStyles = {
  layout: 'vertical' | 'horizontal';
  shape: 'rect' | 'pill';
};

export type information = {
  fullName: string;
  email: string;
  direccion: string;
  apto: string;
  ciudad: string;
  pais: string;
  estado: string;
  codigoPostal: string;
  telefono: string;
};
