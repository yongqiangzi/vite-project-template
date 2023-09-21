declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.mp3';
declare module '*.mp4';
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.ts';
declare module '*.js';
declare module 'vue-awesome-swiper';

declare module 'echarts/lib/echarts';
